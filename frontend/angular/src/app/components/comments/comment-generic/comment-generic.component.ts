import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-generic',
  templateUrl: './comment-generic.component.html',
  styleUrls: ['./comment-generic.component.css']
})
export class CommentGenericComponent implements OnInit {

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
  }

  paintStar(starId: any): boolean {
    let rating = this.rating.rating
    if (parseInt(starId) <= rating) {
      return true
    }
    return false
  }
}
