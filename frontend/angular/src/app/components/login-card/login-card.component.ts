import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' 


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
      email: ['', Validators.required], // Aca van todos los mails validos
      passw: ['', Validators.required]  // Aca van todos los passwords validos
    });
  }

  login(data: any) {
    console.log('Comprobando credenciales...');
    this.authService.login(data).subscribe({
      next: (rta: any) => {
        console.log('Login exitoso!', rta.access_token);
        localStorage.setItem('token', rta.access_token);
        this.router.navigate(["/", "home"])
      }, error: (error) =>{
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
      let email = this.loginForm.value.email;
      let passw = this.loginForm.value.passw;
      console.log('Credenciales: ', {email,passw});
      this.login({email, passw});
    }
    else{
      alert("Formulario invalido")
    }
  }
}


