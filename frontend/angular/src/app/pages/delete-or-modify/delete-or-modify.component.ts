import { Component, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-delete-or-modify',
  templateUrl: './delete-or-modify.component.html',
  styleUrls: ['./delete-or-modify.component.css']
})
export class DeleteOrModifyComponent implements OnInit {

  activatedPoets: any = []
  token: any = localStorage.getItem("token")
  loggedPoet: any
  pData: number
  selectedPage: number = 1

  constructor(

    private pService: PoetService
    
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('PoetModId')
    let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
    this.pService.getPoet(decodedJWT.id).subscribe((data: any) => {
      this.loggedPoet = data
    }
    )
    this.getActivatedPoets(this.selectedPage)
  }

  getActivatedPoets(pageNum: number): void {
    this.pService.getPoets(this.token, {is_activated: 1, page: pageNum, is_admin: 0, per_page: 10}).subscribe(({
      next: (data: any) => {
        this.activatedPoets = data.poet
        this.pData = data.pages
      }
    }));
  }

  changePage(pageNum: number): void {
    this.pService.getPoets(this.token, {is_activated: 1, page: pageNum, is_admin: 0, per_page: 10}).subscribe(({
      next: (data: any) => {
        this.activatedPoets = data.poet
      }
    }));
    this.selectedPage = pageNum
  }
}
