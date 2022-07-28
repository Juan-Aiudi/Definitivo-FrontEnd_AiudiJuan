import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyectoModel } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //URL = 'http://localhost:8080/proyectos/';
  URL = 'https://app-arg-prog-aiudi-juan-back.herokuapp.com/proyectos/'

  constructor(private http: HttpClient) { }

  getProyecto():Observable<any>{
    return this.http.get(this.URL+'lista');
  }

  public getTraerUnProyecto(id: any): Observable<proyectoModel>{
    return this.http.get<proyectoModel>(this.URL+'traer/proyecto/'+id);
  }

  public postNuevoProyecto(form: proyectoModel): Observable<any>{
    return this.http.post<any>(this.URL+'crear', form);
  }

  public putModificarUnProyecto(form: proyectoModel): Observable<any>{
    return this.http.put<any>(this.URL+'modificar/'+form.idProyectos+'?nombreDelProyecto='+form.nombreDelProyecto+'&imagenProyecto='+form.imagenProyecto+'&descripcionProyecto='+form.descripcionProyecto, form);
  }

  public deleteProyecto(id: any): Observable<any>{
    //http://localhost:8080/proyectos/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL+'borrar/'+ id);
  }
}
