import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})
export class ChangepComponent implements OnInit {
  cpassForm!: FormGroup;
  token: any = localStorage.getItem("token")
  id:any
  loggedPoet:any

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(this.id, this.token).subscribe((data: any) => {
      this.loggedPoet = data
    })

    this.cpassForm = this.formBuilder.group({
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    });
  }

  putData(data: any) {
    this.poetService.putPoet(this.token, this.id, data).subscribe({ 
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
          title: 'Se ha modificado tu contraseña con exito.',
        })
        this.router.navigate(["/login/admin/profile"])
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
          title: 'Las contraseñas no coinciden.'
        })
      }, complete: () => {
      }
    })
  }

  submit() {

    if (!this.cpassForm.valid) {
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

    let pass1 = this.cpassForm.value.pass1;
    let pass2 = this.cpassForm.value.pass2;

    console.log(pass1);
    console.log(pass2);

    if (pass1 == pass2) {
      this.putData({
        "passw": pass1
      });
      
    }
    else {
      {
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
          title: 'Las contraseñas no coinciden.'
        })
      }
      
    }

}

}
