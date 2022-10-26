import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-admin-navbar',
  templateUrl: './not-admin-navbar.component.html',
  styleUrls: ['./not-admin-navbar.component.css']
})
export class NotAdminNavbarComponent implements OnInit {

  username!: string
  
  constructor() { }

  ngOnInit(): void {
    this.username = "pepito"
  }

}
