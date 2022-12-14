import { Component, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent implements OnInit {

  unactivatedPoets: any = []
  token: any = localStorage.getItem("token")
  loggedPoet: any
  pData: number
  currentPage: number = 1
  
  constructor(
    private poService: PoetService
  ) { }

  ngOnInit(): void {
    let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
    this.poService.getPoet(decodedJWT.id).subscribe((data: any) => this.loggedPoet = data)
    this.poService.getPoets(this.token, {is_activated: 0, page: this.currentPage, per_page: 10}).subscribe((data: any) => 
    {
      this.unactivatedPoets = data.poet
      this.pData = data.pages
    }) 
  }

  changePage(pageNum: number): void {
    this.poService.getPoets(this.token, {is_activated: 0, page: pageNum, per_page: 10}).subscribe(({
      next: (data: any) => {
        this.unactivatedPoets = data.poet
      }
    }))
    this.currentPage = pageNum
  }
}
