import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacionModel } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  URL = 'http://localhost:8080/educacion/';
  
  constructor(private http: HttpClient) { }

  public getEducacion():Observable<any>{
    return this.http.get(this.URL+'lista');
  }

  public getTraerUnaEducacion(id: any): Observable<any>{
    return this.http.get<any>(this.URL+'traer/educacion/'+id);
  }

  public postNuevaEducacion(form: educacionModel): Observable<any>{
    return this.http.post<any>(this.URL+'crear', form);
  }

  public putModificarUnaEducacion(id: any, titulo: String, tiempo: String, imagen: String, descripcion: String, form: educacionModel):Observable<any>{
    return this.http.put<any>(this.URL+'modificar/'+id+'?tituloObtenidoEducacion='+titulo+'&tiempoDemandadoEducacion='+tiempo+'&imagenEducacion='+imagen+'&descripcionEducacion='+descripcion, form);
  }


  public deleteEducacion(id: any): Observable<any>{
    //http://localhost:8080/educacion/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL+'borrar/'+ id);
  }
  
}
