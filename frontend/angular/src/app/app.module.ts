import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPoemCardLuismiComponent } from './main-poem-card-luismi/main-poem-card-luismi.component';
import { MainPoemCardHenryComponent } from './main-poem-card-henry/main-poem-card-henry.component';
import { MainPoemCardChanoComponent } from './main-poem-card-chano/main-poem-card-chano.component';
import { MainPoemCardNotloggedComponent } from './main-poem-card-notlogged/main-poem-card-notlogged.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPoemCardLuismiComponent,
    MainPoemCardHenryComponent,
    MainPoemCardChanoComponent,
    MainPoemCardNotloggedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
