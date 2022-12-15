import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.css']
})
export class EdituserprofileComponent implements OnInit {

  userForm!: FormGroup;
  token: any = localStorage.getItem("token")
  loggedPoet: any
  editId : any = localStorage.getItem('PoetModId')
  id:any

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  

  ngOnInit(): void {
    this.id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(this.editId, this.token).subscribe((data: any) => {
      this.loggedPoet = data
      this.userForm = this.formBuilder.group({
        name: [this.loggedPoet.name, Validators.required], 
        lname: [this.loggedPoet.lname, Validators.required],
        uname: [this.loggedPoet.uname, Validators.required]
      })
    })
  }

  goPass(): void {
    this.router.navigate(['/change_upassword'])
  }

  putData(data: any) {
    this.poetService.putPoet(this.token, this.editId, data).subscribe({ 
      next: (rta: any) => {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: 'bottom-end',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se ha modificado la información de usuario.',
        })
        this.router.navigate(["/login/admin/delete_or_modify"])
      }, error: (error) =>{
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: 'bottom-end',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'El nombre de usuario elegido ya ha sido tomado.'
        })
      }, complete: () => {
      }
    })
  }
  
  submit() {

    if (!this.userForm.valid) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Se deben completar todos los campos.'
      })

      return
    }

    let uname = this.userForm.value.uname;
    let name = this.userForm.value.name;
    let lname = this.userForm.value.lname;

    console.log(uname);
    console.log(name);
    console.log(lname);
    
    this.putData({
      "name": name,
      "lname": lname,
      "uname": uname
    });
  }

}
