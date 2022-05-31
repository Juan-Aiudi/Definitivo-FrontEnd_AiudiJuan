import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencialabService {

  URL = 'http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  getExperienciaLaboral():Observable<any>{
    return this.http.get(this.URL+'lista');
  }
}
