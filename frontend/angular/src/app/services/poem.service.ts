import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  url = 'poems'

  constructor(
    private httpClient: HttpClient
  ) { }

  getPoems(token?: string, params?: { [key: PropertyKey]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
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

  getPoem(id: number, token?: string) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
    if (token != undefined) {
      heads = heads.set('Authorization', 'Bearer ' + token)
    }
    return this.httpClient.get(this.url + '/' + id.toString(), {headers: heads})
  }

  postPoem(token: string, body: { [key: string]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.post(this.url, body, {headers: heads})
  }

  putPoem(token: string, id: number, body: { [key: string]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.put(this.url + '/' + id.toString(), body, {headers: heads})
  }

  delPoem(token: string, id: number) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.delete(this.url + '/' + id.toString(), {headers: heads})
  }

}
