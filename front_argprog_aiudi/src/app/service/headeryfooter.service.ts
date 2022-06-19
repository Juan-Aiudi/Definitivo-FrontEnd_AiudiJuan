import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderyfooterService {

  URL = 'http://localhost:8080/hyf/';

  constructor(private http: HttpClient) { }

  getHeaderFooter():Observable<any>{
    return this.http.get(this.URL+'traer/datos');
  }
}
