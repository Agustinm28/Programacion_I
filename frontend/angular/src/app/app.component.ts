import { Component } from '@angular/core';
import { PoetService } from './services/poet.service';
import { PoemService } from './services/poem.service';
import { RatingService } from './services/rating.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor (
    private poemService: PoemService,
    private poetService: PoetService,
    private ratingService: RatingService
  ) {

    ratingService.delRating('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2Njc1NjA3NSwianRpIjoiY2Q3MGZhY2ItM2FkOS00YTg3LTlmYmUtNjVjMTQwMGFhOWEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NiwibmJmIjoxNjY2NzU2MDc1LCJleHAiOjE2NjY3NjgwNzUsImFkbWluIjp0cnVlLCJpZCI6NiwibWFpbCI6InBlZHJvdkBnbWFpbC5jb20iLCJhY3RpdmF0ZWQiOnRydWV9._6u5SzHQV24kh7xsOpmHKJAFTjRzpM_51qAsYl-Wew8', 7).subscribe(data=>console.log(data))
  }
}
