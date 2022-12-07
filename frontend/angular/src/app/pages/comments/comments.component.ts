import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoemService } from 'src/app/services/poem.service';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id:number;
  poem: any 
  token: any = localStorage.getItem("token")
  loggedPoet: any

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private poemService: PoemService,
    private poetService: PoetService,
    private datepipe:DatePipe
    ) { 

    this.id=this.route.snapshot.params['poemId']

  }

  ngOnInit(): void { 

    window.scrollTo(0, 0);
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
    this.poemService.getPoem(this.id ,this.token).subscribe((data: any) => {

      this.poem = data;
      
     })
    
  }

}
