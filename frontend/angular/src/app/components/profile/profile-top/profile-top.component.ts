import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.css']
})
export class ProfileTopComponent implements OnInit {

  token: any = localStorage.getItem("token")
  poet: any
  
  constructor(
    private poetService: PoetService
  ) { }

  ngOnInit(): void {
    let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
    this.poetService.getPoet(decodedJWT.id).subscribe((data: any) => this.poet = data)
  }
}
