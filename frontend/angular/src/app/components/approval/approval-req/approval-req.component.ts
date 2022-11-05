import { Component, Input, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-approval-req',
  templateUrl: './approval-req.component.html',
  styleUrls: ['./approval-req.component.css']
})
export class ApprovalReqComponent implements OnInit {

  @Input('poet') poet: any
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2Njk4MDQ5NCwianRpIjoiMDRlZDIxODAtMzk4YS00MjI4LWFkZDgtNjAyOGVhZWQ5YzVlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NiwibmJmIjoxNjY2OTgwNDk0LCJleHAiOjE2NjY5OTI0OTQsImFkbWluIjp0cnVlLCJpZCI6NiwibWFpbCI6InBlZHJvdkBnbWFpbC5jb20iLCJhY3RpdmF0ZWQiOnRydWV9.LfCBtjW9lsGHvosDIe7QGTCSR3cqvH-w-Fx0ZP0V_ME"

  constructor(
    private poService: PoetService
  ) { }

  ngOnInit(): void {
  }

  acceptRequest(): void {
    this.poService.putPoet(this.token, this.poet.id, {activated: 1}).subscribe()
    window.location.reload()
  }

  rejectRequest(): void {
    this.poService.delPoet(this.token, this.poet.id).subscribe()
    window.location.reload()
  }
}


