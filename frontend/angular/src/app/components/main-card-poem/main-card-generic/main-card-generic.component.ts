import { Component, Input, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-main-card-generic',
  templateUrl: './main-card-generic.component.html',
  styleUrls: ['./main-card-generic.component.css']
})
export class MainCardGenericComponent implements OnInit {

  @Input('poem') poem: any
  
  constructor( ) { }

  ngOnInit(): void { }

}
