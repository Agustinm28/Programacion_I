import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.css']
})
export class ProfileTopComponent implements OnInit {

  token: any = localStorage.getItem("token")
  @Input("loggedPoet") poet: any
  
  constructor( ) { }

  ngOnInit(): void {
  }
}
