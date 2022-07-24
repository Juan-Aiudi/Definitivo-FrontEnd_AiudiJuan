import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experienciaLabModel } from '../model/experienciaLab.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencialabService {

  //URL = 'http://localhost:8080/experiencia/';
  URL = 'https://arg-programa-aiudi-juan.herokuapp.com/experiencia/'

  constructor(private http: HttpClient) { }

  public getExperienciaLaboral():Observable<any>{
    return this.http.get(this.URL+'lista');
  }

  public getTraerUnaExperiencia(id: any): Observable<any>{
    return this.http.get<any>(this.URL+'traer/experiencia/'+id);
  }

  public postNuevaExperiencia(form: experienciaLabModel): Observable<any>{
    return this.http.post<any>(this.URL+'crear', form);
  }

  public putModificarUnaExperiencia(id: any, lugar: String, actual: String, imagen: String, descripcion: String, form: experienciaLabModel):Observable<any>{
    return this.http.put<any>(this.URL+'modificar/'+id+'?lugarExpLab='+lugar+'&actualoAnterioryTiempoExpLab='+actual+'&imagenExpLab='+imagen+'&descripcionExpLab='+descripcion, form);
  }


  public deleteExperiencia(id: any): Observable<any>{
    //http://localhost:8080/experiencia/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL+'borrar/'+ id);
  }

}
