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

  constructor(

    private pService: PoetService
    
  ) { }

  ngOnInit(): void {
    let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
    this.pService.getPoet(decodedJWT.id).subscribe((data: any) => this.loggedPoet = data)
    this.getActivatedPoets()
  }

  getActivatedPoets(): void {
    let decodedJWT = JSON.parse(window.atob(this.token.split('.')[1]));
    this.pService.getPoets(this.token, {is_activated: 1, page: 1, is_admin: 0, per_page: 10}).subscribe(({
      next: (data: any) => this.activatedPoets = data.poet
    }));
  }
}
