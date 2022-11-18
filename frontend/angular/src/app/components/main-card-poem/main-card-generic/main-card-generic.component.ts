import { Component, Input, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-main-card-generic',
  templateUrl: './main-card-generic.component.html',
  styleUrls: ['./main-card-generic.component.css']
})
export class MainCardGenericComponent implements OnInit {

  @Input('poem') poem: any
  token: any = localStorage.getItem("token")
  loggedId: any
  
  constructor( ) { }

  ngOnInit(): void {
    this.loggedId = JSON.parse(window.atob(this.token.split('.')[1])).id;
  }

}
