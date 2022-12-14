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
  searchdata: any = localStorage.getItem("searchTerm")
  
  constructor(
    private poetService: PoetService,
    private poemService: PoemService
    ) {  }

  ngOnInit(): void {
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
    if (this.searchdata) {
      this.poemService.getPoems(this.token, {})
    }
  }

}
