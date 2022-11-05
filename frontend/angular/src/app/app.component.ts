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
  title = 'botellasenelmar';

  constructor (
    //private poemService: PoemService,
    //private poetService: PoetService,
    //private ratingService: RatingService
  ) {

  }
}
