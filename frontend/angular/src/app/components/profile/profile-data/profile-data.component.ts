import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  token: any = localStorage.getItem("token")
  @Input("loggedPoet") poet: any

  constructor(private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    let createdOn = this.datepipe.transform(this.poet.createdOn, 'dd/MM/yyyy')
    let lastSeen = this.datepipe.transform(this.poet.lastSeen, 'dd/MM/yyyy')
  }
  

}
