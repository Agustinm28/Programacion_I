import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.css']
})
export class RegistrationCardComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required], 
      lname: ['', Validators.required],
      uname: ['', Validators.required],
      mail: ['', Validators.required],
      passw1: ['', Validators.required],
      passw2: ['', Validators.required]
    });
  }

  postRegistration(data: any) {
    this.poetService.postPoet(data).subscribe({
      next: (rta: any) => {
        const Toast = Swal.mixin({
          toast: true,

          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Solicitud de registro exitosa',
          text: 'Cuando tu solicitud sea aprobada, recibirás un correo y podrás acceder a tu cuenta.',
          showConfirmButton: true
        })
        this.router.navigate(["/", "login"])
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
          title: 'El mail y/o el nombre de usuario ya han sido tomados.'
        })
      }, complete: () => {
      }
    })
  }
  
  submit() {
    if (!this.registrationForm.valid) {
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
        title: 'Se deben completar todos los campos correctamente.'
      })

      return
    }
    else if (!this.checkMatchingPassw()) {
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
        title: 'Las contraseñas no coinciden.'
      })

      return
    }
    else if (!this.checkPasswLength()) {
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
        title: 'La contraseña debe tener una longitud menor a 30 caracteres.'
      })

      return
    }
    let name = this.registrationForm.value.name;
    let lname = this.registrationForm.value.lname;
    let uname = this.registrationForm.value.uname;
    let mail = this.registrationForm.value.mail;
    let passw = this.registrationForm.value.passw1;
    this.postRegistration({
      "name": name,
      "lname": lname,
      "uname": uname,
      "mail": mail, 
      "passw": passw
    });
  }

  checkMatchingPassw() {
    let passw1 = this.registrationForm.value.passw1;
    let passw2 = this.registrationForm.value.passw2;
    return passw1 == passw2
  }

  checkPasswLength() {
    let passw = this.registrationForm.value.passw1;
    return passw.length <= 30
  }
}
