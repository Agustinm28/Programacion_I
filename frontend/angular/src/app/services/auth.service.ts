import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';  
import { CookieService } from 'ngx-cookie-service';    

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'login'
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookie:CookieService
  ) { }

  token:string;
  
  login(data: any): Observable<any> {

    return this.httpClient
      .post(this.url, data)
      .pipe(take(1));
  }

  getIdToken() {

    console.log(this.token);
    return this.cookie.get("token")

  }

  logout() {

    this.token="";
    this.cookie.set("token", this.token);
    localStorage.removeItem('token');
    this.router.navigate(['/', 'home']);

  }
}