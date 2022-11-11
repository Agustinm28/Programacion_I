import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css']
})
export class PaginationBarComponent implements OnInit {

  @Input('pData') data: any
  pageAmount: number[] = []

  constructor() { }

  ngOnInit(): void {
    for (let page = 1; page < this.data; page++) {
      this.pageAmount.push(page)
      console.log(this.pageAmount)
    }
    
  }

}
