import { Component, Input, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-approval-req',
  templateUrl: './approval-req.component.html',
  styleUrls: ['./approval-req.component.css']
})
export class ApprovalReqComponent implements OnInit {

  @Input('poet') poet: any
  token: any = localStorage.getItem("token")

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


