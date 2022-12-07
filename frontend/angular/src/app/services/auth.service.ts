import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';

const AUTH_API = 'http://localhost:4200/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'aplication/json' })
}

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

  refreshToken  () {
    return this.httpClient.post(AUTH_API + 'refreshtoken', { }, httpOptions)
  }

  logout() {
    
    localStorage.removeItem('token');
    this.router.navigate(['/', 'home']);

  }
}