import { Component, OnInit, Output } from '@angular/core';
import { PoemService } from 'src/app/services/poem.service';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  poems: any = []
  pData: number
  selectedPage: number = 1
  token: any = localStorage.getItem("token")
  loggedPoet: any
  
  constructor(
    private poemService: PoemService,
    private poetService: PoetService
  ) { }

  ngOnInit(): void {
    this.poemService.getPoems(this.token, {page: this.selectedPage, order_by: "ratings_count"}).subscribe((data: any) => {
      this.pData = data.pages;
      this.poems = data.poem;
      
     })
    if (this.token) {
      let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
      this.poetService.getPoet(decodedJWT.id).subscribe((data: any) => this.loggedPoet = data)
    }
    else {
      this.loggedPoet = {uname: "usuario"}
    }
  }

  changePage(page: number): void {
    this.poemService.getPoems(this.token, {page: page, order_by: "ratings_count"}).subscribe((data: any) => {
      this.poems = data.poem
      this.selectedPage = page
    }
    )
    window.scrollTo(0, 0)
  }

}
