import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtered-poems-generic',
  templateUrl: './filtered-poems-generic.component.html',
  styleUrls: ['./filtered-poems-generic.component.css']
})
export class FilteredPoemsGenericComponent implements OnInit {

  @Input("poem") poem: any
  token: any = localStorage.getItem("token")
    
  constructor(private datepipe: DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.poem.date = this.datepipe.transform(this.poem.date, 'dd/MM/yyyy')
  }

  goComments(poemId:any): void {
    this.router.navigate(["/login/admin/" + this.poem.id + '/comments'])
  }
}
