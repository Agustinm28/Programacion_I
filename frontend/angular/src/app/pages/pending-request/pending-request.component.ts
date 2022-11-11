import { Component, OnInit } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent implements OnInit {

  unactivatedPoets: any = []
  token: any = localStorage.getItem("token")
  
  constructor(
    private poService: PoetService
  ) { }

  ngOnInit(): void {
    this.poService.getPoets(this.token, {is_activated: 0}).subscribe((data: any) => this.unactivatedPoets = data.poet) 
  }

}
