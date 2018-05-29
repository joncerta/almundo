import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url: string;

  constructor(private http: Http) {
    this.url = GLOBAL.url;
 }

 getHotels(){
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.get(this.url+'/hotels', {headers: headers}).pipe(map(res => res.json()));
}

}
