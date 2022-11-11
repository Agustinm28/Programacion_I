import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required], 
      passw: ['', Validators.required]  
    });
  }

  login(data: any) {
    
    console.log('Comprobando credenciales...');
    this.authService.login(data).subscribe({
      next: (rta: any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Logueado exitosamente'
        })
        console.log('Login exitoso!', rta.access_token);
        localStorage.setItem('token', rta.access_token);
        this.router.navigate(["/", "home"])
      }, error: (error) =>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Usuario y/o contraseña incorrectos'
        })
        console.log('Error: ', error);
        localStorage.removeItem('token');
      }, complete: () => {
        console.log('Termino');
      }
    })
  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let mail = this.loginForm.value.mail;
      let passw = this.loginForm.value.passw;
      console.log('Credenciales: ', {mail,passw});
      this.login({mail, passw});
    }
    else{
      alert("Formulario invalido")
    }
  }
}


