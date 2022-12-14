import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor( private datepipe: DatePipe, private router: Router) { }

  ngOnInit(): void {

    this.poem.date=this.datepipe.transform(this.poem.date, 'dd/MM/yyyy')

    if (this.token) {
      this.loggedId = JSON.parse(window.atob(this.token.split('.')[1])).id;
      this.isAdmin = JSON.parse(window.atob(this.token.split('.')[1])).admin;
      return
    }
    this.loggedId = -1
    this.isAdmin = false
  }

  goComments(poemId:any): void {
    this.router.navigate(["/login/admin/" + poemId + '/comments'])
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
