import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoemService } from 'src/app/services/poem.service';
import { PoetService } from 'src/app/services/poet.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  poemId: number;
  poem: any;
  currentPoemRatings: any; 
  token: any = localStorage.getItem("token")
  loggedPoet: any

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private poemService: PoemService,
    private poetService: PoetService,
    private ratingService: RatingService,
    private datepipe: DatePipe
    ) { 

    this.poemId = this.route.snapshot.params['poemId']

  }

  ngOnInit(): void { 
    window.scrollTo(0, 0);
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
    this.poemService.getPoem(this.poemId ,this.token).subscribe((data: any) => {
      this.poem = data;
      this.poem.date = this.datepipe.transform(this.poem.date, 'dd/MM/yyyy')
    })
    this.ratingService.getRatings(this.token, {poem_id: this.poemId}).subscribe((data: any) => {
      this.currentPoemRatings = data.rating;
     })
  }

}
