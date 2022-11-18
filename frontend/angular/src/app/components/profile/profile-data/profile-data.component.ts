import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  token: any = localStorage.getItem("token")
  @Input("loggedPoet") poet: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
