import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';      

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'login'
  
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }
  
  login(data: any): Observable<any> {
    return this.httpClient
      .post(this.url, data)
      .pipe(take(1));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/', 'home']);
  }
}