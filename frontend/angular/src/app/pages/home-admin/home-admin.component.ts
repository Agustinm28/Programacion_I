import { Component, OnInit } from '@angular/core';
import { PoemService } from 'src/app/services/poem.service';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  poems: any = []
  pData: any 
  token: any = localStorage.getItem("token")
  loggedPoet: any
  
  constructor(
    private poemService: PoemService,
    private poetService: PoetService
  ) { }

  ngOnInit(): void {
    this.poemService.getPoems(this.token).subscribe((data: any) => {
      this.pData = data.pages;
      this.poems = data.poem;
     })
    if (this.token) {
      let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
      this.poetService.getPoet(decodedJWT.id).subscribe((data: any) => this.loggedPoet = data)
    }
    else {
      this.loggedPoet = {name: "usuario"}
    }
  }

}
