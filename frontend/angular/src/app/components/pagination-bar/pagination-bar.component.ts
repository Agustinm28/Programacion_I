import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css']
})
export class PaginationBarComponent implements OnInit {

  @Input('pData') data: any
  @Output() newItemEvent = new EventEmitter<number>();
  pageAmount: number[] = []
  currentPage: number = 1

  constructor() { }

  ngOnInit(): void {
    for (let page = 1; page <= this.data; page++) {
      this.pageAmount.push(page)
    }
  }

  changePage(pageNum: number): void {
    if(pageNum < 1 || pageNum > this.data){
      return 
    }
    this.currentPage = pageNum
    this.newItemEvent.emit(pageNum)
  }

}
