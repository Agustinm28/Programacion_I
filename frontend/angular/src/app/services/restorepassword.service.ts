import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { PoetService } from './poet.service'

@Injectable({
  providedIn: 'root'
})
export class RestorepasswordService {

  token:any = localStorage.getItem('token')
  poet_data:any = []

  constructor(
    private httpClient: HttpClient,
    private authService:AuthService,
    private poet:PoetService
  ) { }

  get_user_id(mail:string) {
    this.poet.getPoet(this.token, mail).subscribe(
      ({next: (data: any) => this.poet_data = data.poet}));
  }

}
