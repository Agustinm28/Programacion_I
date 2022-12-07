import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-generic',
  templateUrl: './comment-generic.component.html',
  styleUrls: ['./comment-generic.component.css']
})
export class CommentGenericComponent implements OnInit {

  @Input('poem') poem: any
  @Input('rating') rating: any
  token: any = localStorage.getItem("token")
  loggedId: any
  isAdmin: any

  constructor() { }

  ngOnInit(): void {
    if (this.token) {
      this.loggedId = JSON.parse(window.atob(this.token.split('.')[1])).id;
      this.isAdmin = JSON.parse(window.atob(this.token.split('.')[1])).admin;
      return
    }
    this.loggedId = -1
    this.isAdmin = false

    console.log(this.rating);
    
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
