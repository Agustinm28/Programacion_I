import { Component, OnInit } from '@angular/core';
import { PoemService } from 'src/app/services/poem.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ownPoems: any = []
  token = undefined
  ownId: any = 2
  
  constructor(
    private poemService: PoemService
  ) { }

  ngOnInit(): void {
    this.poemService.getPoems(this.token, {"poet_id": this.ownId}).subscribe((data: any) => this.ownPoems = data.poem)
  }

}
