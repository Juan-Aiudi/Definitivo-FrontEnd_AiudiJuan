import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personaAcDe } from '../model/personaAcDe.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaAcDeService {
  URL = 'http://localhost:8080/ad/';
  constructor(private http: HttpClient) { }

  public getPersonaAcDe(): Observable<personaAcDe>{
    return this.http.get<personaAcDe>(this.URL+'traer/persona');
  }
}
