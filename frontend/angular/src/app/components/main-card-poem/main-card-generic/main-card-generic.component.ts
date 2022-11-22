import { Component, Input, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-main-card-generic',
  templateUrl: './main-card-generic.component.html',
  styleUrls: ['./main-card-generic.component.css']
})
export class MainCardGenericComponent implements OnInit {

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
