import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/proyectos/';

  constructor(private http: HttpClient) { }

  getProyecto():Observable<any>{
    return this.http.get(this.URL+'lista');
  }
}
