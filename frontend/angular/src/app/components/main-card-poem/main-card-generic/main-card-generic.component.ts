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

  fullStar(starId: any): boolean {
    let rating = this.poem.av_rating != null ? this.poem.av_rating : 0
    if (parseInt(starId) <= rating) {
      return true
    }
    return false
  }

  halfStar(starId: any): boolean {
    let rating = this.poem.av_rating != null ? this.poem.av_rating : 0
    if (rating == 0) {
      return false
    }
    if ((parseInt(starId) > rating) && (Math.round(rating) != Math.trunc(rating))) {
      return true
    }
    return false
  }
}
