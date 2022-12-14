import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PoetService {
  url = 'poets'
  url_i = 'poet'
  
  constructor(
    private httpClient: HttpClient,
    private authService:AuthService
  ) { }

  getPoets(token?:string, params?: { [key: PropertyKey]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token) //OBTIENE TOKEN DE USER
    let httpP = new HttpParams()
    if (token != undefined) {
      heads = heads.set('Authorization', 'Bearer ' + token) // TOKEN DE USUSARIO
    }
    for (let key in params) {
      let value = params[key];
      httpP = httpP.set(key, value)
    }
    return this.httpClient.get(this.url, { headers: heads, params: httpP })
  }

  getPoet(id: number, token?: string) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
    if (token != undefined) {
      heads = heads.set('Authorization', 'Bearer ' + token)
    }
    return this.httpClient.get(this.url + '/' + id.toString(), {headers: heads})
  }

  postPoet(body: { [key: string]: any }, token?: string) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
    if (token != undefined) {
      heads = heads.set('Authorization', 'Bearer ' + token)
    }
    return this.httpClient.post(this.url, body, {headers: heads})
  }
  
  putPoet(token: string, id: number, body: { [key: string]: any }) {
    console.log(body)
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.put(this.url_i + '/' + id.toString(), body, {headers: heads})
  }

  delPoet(token: string, id: number) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.delete(this.url + '/' + id.toString(), {headers: heads})
  }
}
