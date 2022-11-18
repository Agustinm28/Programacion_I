import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-del-mod-prueba',
  templateUrl: './del-mod-prueba.component.html',
  styleUrls: ['./del-mod-prueba.component.css']
})
export class DelModPruebaComponent implements OnInit {

  @Input('poet') poet: any
  token: any = localStorage.getItem("token")
  
  constructor(
    private poService: PoetService
  ) {

  }
  ngOnInit(): void { 
  }

  deletePoet(): void {
    this.poService.delPoet(this.token, this.poet.id).subscribe()
    window.location.reload()
  }

}
