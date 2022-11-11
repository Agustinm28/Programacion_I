import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-poem-card-own',
  templateUrl: './main-poem-card-own.component.html',
  styleUrls: ['./main-poem-card-own.component.css']
})
export class MainPoemCardOwnComponent implements OnInit {

  @Input('poem') poem: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
