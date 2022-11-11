import { Component, Input, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('loggedPoet') poet: any
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get isLogged() {
    return localStorage.getItem("token") || false;
  }

  get isAdmin() {
    let token = localStorage.getItem("token") || undefined;
    if (token){
      let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
      return decodedJWT.admin
    }

    return false
  }

  cerrarSesion() {
    this.authService.logout();
    window.location.reload()
  }
}
