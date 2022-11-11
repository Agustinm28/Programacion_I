import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router

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
  }
}
