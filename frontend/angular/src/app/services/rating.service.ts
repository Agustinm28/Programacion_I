import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  url = 'ratings'

  constructor(
    private httpClient: HttpClient
  ) { }

  getRating(id: number, token?: string) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    if (token != undefined) {
      heads = heads.set('Authorization', 'Bearer ' + token)
    }
    return this.httpClient.get(this.url + '/' + id.toString(), {headers: heads})
  }

  delRating(token: string, id: number) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.delete(this.url + '/' + id.toString(), {headers: heads})
  }

  getRatings(token?: string, params?: { [key: PropertyKey]: any }) {
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

  postRatings(token: string, params: { [key: string]: any }) {
    let heads = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Authorization', 'Bearer ' + token)
    return this.httpClient.post(this.url, { headers: heads, params: params })
  }

}
