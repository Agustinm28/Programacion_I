import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PoemService } from 'src/app/services/poem.service';
import { PoetService } from 'src/app/services/poet.service';
import { RatingService } from 'src/app/services/rating.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-del-mod-prueba',
  templateUrl: './del-mod-prueba.component.html',
  styleUrls: ['./del-mod-prueba.component.css']
})
export class DelModPruebaComponent implements OnInit {

  @Input('poet') poet: any
  token: any = localStorage.getItem("token")
  
  constructor(
    private poetService: PoetService,
    private router: Router
  ) {

  }
  ngOnInit(): void { 
  }

  modifyPoet():void {
    localStorage.setItem('PoetModId', this.poet.id)
    this.router.navigate(['/login/admin/profile/edituser'])
  }

  deletePoet(): void {   
    // Eliminar al usuario
    this.poetService.delPoet(this.token, this.poet.id).subscribe()
    location.reload()
  }

}
