import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtered-dropdowns',
  templateUrl: './filtered-dropdowns.component.html',
  styleUrls: ['./filtered-dropdowns.component.css']
})
export class FilteredDropdownsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  orderBy(filter: number): void {
    this.newItemEvent.emit(filter)
  }
}
