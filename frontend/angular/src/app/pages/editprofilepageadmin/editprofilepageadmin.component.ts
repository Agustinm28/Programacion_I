import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-editprofilepageadmin',
  templateUrl: './editprofilepageadmin.component.html',
  styleUrls: ['./editprofilepageadmin.component.css']
})
export class EditprofilepageadminComponent implements OnInit {

  token: any = localStorage.getItem("token")
  loggedPoet: any

  constructor(
    private poetService: PoetService
  ) { }

  ngOnInit(): void {
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
  }

}