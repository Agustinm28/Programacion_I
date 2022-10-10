import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPoemCardLuismiComponent } from './components/main-poem-card-luismi/main-poem-card-luismi.component';
import { MainPoemCardHenryComponent } from './components/main-poem-card-henry/main-poem-card-henry.component';
import { MainPoemCardChanoComponent } from './components/main-poem-card-chano/main-poem-card-chano.component';
import { MainPoemCardNotloggedComponent } from './components/main-poem-card-notlogged/main-poem-card-notlogged.component';
import { CommentChanoComponent } from './comment-chano/comment-chano.component';
import { CommentLuismiComponent } from './comment-luismi/comment-luismi.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPoemCardLuismiComponent,
    MainPoemCardHenryComponent,
    MainPoemCardChanoComponent,
    MainPoemCardNotloggedComponent,
    CommentChanoComponent,
    CommentLuismiComponent,
    AddCommentComponent,
    PaginationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
