import { Component, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-delete-or-modify',
  templateUrl: './delete-or-modify.component.html',
  styleUrls: ['./delete-or-modify.component.css']
})
export class DeleteOrModifyComponent implements OnInit {

  activatedPoets: any = []
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2Njk4MDQ5NCwianRpIjoiMDRlZDIxODAtMzk4YS00MjI4LWFkZDgtNjAyOGVhZWQ5YzVlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NiwibmJmIjoxNjY2OTgwNDk0LCJleHAiOjE2NjY5OTI0OTQsImFkbWluIjp0cnVlLCJpZCI6NiwibWFpbCI6InBlZHJvdkBnbWFpbC5jb20iLCJhY3RpdmF0ZWQiOnRydWV9.LfCBtjW9lsGHvosDIe7QGTCSR3cqvH-w-Fx0ZP0V_ME'
  
  constructor(

    private pService: PoetService
    
  ) { }

  ngOnInit(): void {
    this.getActivatedPoets()
  }

  getActivatedPoets(): void {
    this.pService.getPoets(this.token, {is_activated: 1, page: 1}).subscribe((data: any) => this.activatedPoets = data.poet);
  }
  
}