import { Component, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';
import { PoemService } from 'src/app/services/poem.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnInit {

  token: any = localStorage.getItem("token")
  loggedPoet: any
  poems: any
  filter: number = 3
  pData: any
  selectedPage: number = 1
  filters = [
    "av_rating[desc]",
    "ratings_count[desc]",
    "ratings_count",
    "date[desc]",
    "date",
    "title",
    "title[desc]"   
  ]

  constructor(
    private poetService: PoetService,
    private poemService: PoemService
    ) {  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
    if(localStorage.getItem("previousSearch")) {
      this.search(localStorage.getItem("previousSearch"))
    }
  }

  search(term?: any): void {
    if (term) {
      this.orderBy(this.filter, term)
      return
    }
    this.poemService.getPoems(this.token, {order_by: "date[desc]"}).subscribe((data: any) => {
      this.poems = data.poem
      this.pData = data.pages
    })
  }
  
  orderBy(filter: number, term?: any) {
    this.filter = filter
    if (term) {
      this.poemService.getPoems(this.token, {title: term, page: this.selectedPage, order_by: this.filters[filter]}).subscribe((data: any) => {
        this.poems = data.poem
        this.pData = data.pages
      })
      return
    }
    this.poemService.getPoems(this.token, {title: localStorage.getItem("previousSearch"), page: this.selectedPage, order_by: this.filters[filter]}).subscribe((data: any) => {
      this.poems = data.poem
      this.pData = data.pages
    })
    console.log(this.poems)
  }

  changePage(page: number): void {
    this.poemService.getPoems(this.token, {page: page, order_by: this.filters[this.filter]}).subscribe((data: any) => {
      this.poems = data.poem
      this.selectedPage = page
    }
    )
    window.scrollTo(0, 0)
  }
}
