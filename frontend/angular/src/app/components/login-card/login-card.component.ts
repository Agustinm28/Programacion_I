import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import { PoetService } from 'src/app/services/poet.service';

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
    private poetService: PoetService,
    private router: Router
  ) { }

    // MUESTRA UN POEMA AL AZAR EN EL INICIO DE SESION

  poemarray = [
    ['Como muchas cartas, como muchos relatos, también hay mensajes que son botellas al mar [...]. Es así, pienso, que se operan las comunicaciones profundas.','- Julio Cortázar.','assets/cortazar.png'],
    ['En las noches claras, resuelvo el problema de la soledad del ser. Invito a la luna y con mi sombra somos tres.','- Gloria Fuertes.','assets/fuertes.png'],
    ['¿Por qué para esperar la nieve se ha desvestido la arboleda? ¿Y cómo saber cual es Dios entre los Dioses de Calcuta? ¿Por qué viven tan harapientos todos los gusanos de seda? ¿Por qué es tan dura la dulzura del corazón de la cereza? ¿Es porque tiene que morir o porque tiene que seguir?','- Pablo Neruda.','assets/neruda.png'],
    ['Apoyado en el pozo, pobre joven, vuelves hacia mí tu cabeza gentil, con una risa grave en los ojos Tú eres, David, como un toro en un día de abril, que de la mano de un muchacho que ríe va dulce a la muerte.','- Pier Paolo Pasolini.','assets/pasolini.png'],
    ['Cuántas veces, amor, te amé sin verte y tal vez sin recuerdo, sin reconocer tu mirada, sin mirarte, centaura, en regiones contrarias, en un mediodía quemante: eras sólo el aroma de los cereales que amo.', '- Pablo Neruda.','assets/neruda.png']
              ];
  random = this.poemarray[Math.floor(Math.random() * this.poemarray.length)];

  // SE AGRUPA MAIL Y PASSWORD EN EL FORMBUILDER

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required], 
      passw: ['', Validators.required]
    });
  }

  login(data: any) {
    this.authService.login(data).subscribe({ // SE LLAMA A AUTHSERVICE PARA LOGEAR AL USUARIO
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
        localStorage.setItem('token', rta.access_token) // GUARDA EL TOKEN CON PERSISTENCIA
        this.router.navigate(["/", "home"]) // TE DEVUELVE AL HOME SI EL LOGIN FUE EXITOSO
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
        localStorage.removeItem('token'); // SE ELIMINA EL VALOR DEL TOKEN DEL ALMACENAMIENTO LOCAL EN CASO DE QUE EL USUARIO Y PASSWORD NO SEAN CORRECTOS
      }, complete: () => {
      }
    })
  }

  submit() { // SE ENVIA MAIL Y PASSWORD A LA FUNCION LOGIN
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


