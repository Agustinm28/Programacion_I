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

  poemarray = [
    ['Como muchas cartas, como muchos relatos, también hay mensajes que son botellas al mar [...]. Es así, pienso, que se operan las comunicaciones profundas.','- Julio Cortázar.','assets/cortazar.png'],
    ['En las noches claras, resuelvo el problema de la soledad del ser. Invito a la luna y con mi sombra somos tres.','- Gloria Fuertes.','assets/fuertes.png'],
    ['¿Por qué para esperar la nieve se ha desvestido la arboleda? ¿Y cómo saber cual es Dios entre los Dioses de Calcuta? ¿Por qué viven tan harapientos todos los gusanos de seda? ¿Por qué es tan dura la dulzura del corazón de la cereza? ¿Es porque tiene que morir o porque tiene que seguir?','- Pablo Neruda.','assets/neruda.png'],
    ['Apoyado en el pozo, pobre joven, vuelves hacia mí tu cabeza gentil, con una risa grave en los ojos Tú eres, David, como un toro en un día de abril, que de la mano de un muchacho que ríe va dulce a la muerte.','- Pier Paolo Pasolini.','assets/pasolini.png'],
    ['Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo, sin reconocer tu mirada, sin mirarte, centaura, en regiones contrarias, en un mediodía quemante: eras sólo el aroma de los cereales que amo.', '- Pablo Neruda.','assets/neruda.png']
              ];
  random = this.poemarray[Math.floor(Math.random() * this.poemarray.length)];

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required], 
      passw: ['', Validators.required]  
    });
  }

  token:string;

  login(data: any) {
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
          title: 'Usuario y/o contraseña incorrecto/s'
        })
        localStorage.removeItem('token');
      }, complete: () => {
      }
    })
  }

  submit() {
    if (this.loginForm.valid) {
      let mail = this.loginForm.value.mail;
      let passw = this.loginForm.value.passw;
      this.login({mail, passw});
    }
    else{
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
        title: 'Usuario y/o contraseña vacíos'
      })
    }
  }

}


