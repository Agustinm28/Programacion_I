import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoetService {
  url = 'poets'
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getPoets(token?: string, params?: { [key: PropertyKey]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    let httpP = new HttpParams()
    if (token != undefined) {
      heads = heads.set('Authorization', 'Bearer ' + token)
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

  postPoet(token: string, body: { [key: string]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.post(this.url, body, {headers: heads})
  }
  
  putPoet(token: string, id: number, body: { [key: string]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.put(this.url + '/' + id.toString(), body, {headers: heads})
  }

  delPoet(token: string, id: number) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.delete(this.url + '/' + id.toString(), {headers: heads})
  }
}
