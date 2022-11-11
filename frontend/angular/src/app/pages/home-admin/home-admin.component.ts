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
  token: any = undefined
  
  constructor(
    private poemService: PoemService
  ) { }

  ngOnInit(): void {
    this.poemService.getPoems(this.token, {}).subscribe((data: any) => { 
      this.pData = data.pages;
      this.poems = data.poem;
     })
  }

}
