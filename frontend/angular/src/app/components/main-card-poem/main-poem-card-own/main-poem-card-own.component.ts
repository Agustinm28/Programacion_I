import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-poem-card-own',
  templateUrl: './main-poem-card-own.component.html',
  styleUrls: ['./main-poem-card-own.component.css']
})
export class MainPoemCardOwnComponent implements OnInit {

  @Input('poem') poem: any
  token: any = localStorage.getItem("token")
  loggedId: any
  isAdmin: any
  
  constructor( ) { }

  ngOnInit(): void {
    if (this.token) {
      this.loggedId = JSON.parse(window.atob(this.token.split('.')[1])).id;
      this.isAdmin = JSON.parse(window.atob(this.token.split('.')[1])).admin;
      return
    }
    this.loggedId = -1
    this.isAdmin = false
  }

  editPoem(poemId: any): void {
    localStorage.setItem("editId", poemId)
  }

}
