import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personaAcDe } from '../model/personaAcDe.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaAcDeService {

  //URL = 'http://localhost:8080/ad/';
  URL = 'https://arg-programa-aiudi-juan.herokuapp.com/ad/'
  
  constructor(private http: HttpClient) { }

  public getPersonaAcDe(): Observable<personaAcDe>{
    return this.http.get<personaAcDe>(this.URL+'lista');
  }

  public getTraerUnaPersona(id: any): Observable<personaAcDe>{
    return this.http.get<personaAcDe>(this.URL+'traer/persona/'+id);
  }

  public deletePersona(id: any): Observable<any>{
    //http://localhost:8080/ad/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL+'borrar/'+ id);
  }

  
  public putModificarUnaPersona(id: any, nombre: String, apellido: String, titulo: String, imagen: String, descripcion: String, form:personaAcDe): Observable<any>{
    return this.http.put<any>(this.URL+'modificar/'+id+'?nombreAcercaDe='+nombre+'&apellidoAcercaDe='+apellido+'&tituloAcercaDe='+titulo+'&imagenAcercaDe='+imagen+'&descripcionAcercaDe='+descripcion, form);
  }

  public postNuevaPersona(form: personaAcDe): Observable<any>{
    return this.http.post<any>(this.URL+'crear', form);
  }
  
}
