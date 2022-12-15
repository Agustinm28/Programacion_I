import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchdataForm!: FormGroup
  @Input('loggedPoet') poet: any
  @Output() newItemEvent = new EventEmitter<number>();
    
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchdataForm = this.formBuilder.group({
      searchTerm: [localStorage.getItem("previousSearch")]
    });
  }

  goFiltered(): void {
    this.router.navigate(["/login/admin/filtered/"])
    localStorage.setItem("previousSearch", this.searchdataForm.value.searchTerm)
    this.newItemEvent.emit(this.searchdataForm.value.searchTerm)
    localStorage.removeItem("PoetModId")
  }

  goHome() {
    this.router.navigate(["/home"])
    localStorage.removeItem("previousSearch")
    localStorage.removeItem("PoetModId")
  }

  goEditor() {
    this.router.navigate(['/login/admin/editor'])
    localStorage.removeItem("PoetModId")
  }

  goProfile() {
    this.router.navigate(['/login/admin/profile'])
    localStorage.removeItem("PoetModId")
  }

  goDeleteOrModify() {
    this.router.navigate(['/login/admin/delete_or_modify'])
    localStorage.removeItem("PoetModId")
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
    localStorage.removeItem("PoetModId")
    this.authService.logout();
    window.location.reload()
  }
}
