import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headeryfooterModel } from '../model/headeryfooter.model';
import { redesModel } from '../model/redes.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderyfooterService {

  //URL = 'http://localhost:8080/hyf/';
  //URL_Redes = 'http://localhost:8080/redes/';

  URL = 'https://app-arg-prog-aiudi-juan-back.herokuapp.com/hyf/'
  URL_Redes = 'https://app-arg-prog-aiudi-juan-back.herokuapp.com/redes/'

  constructor(private http: HttpClient) { }

  public getHeaderFooter():Observable<any>{
    return this.http.get(this.URL+'traer/datos');
  }

  public putModificarHyF(id: any, imagenheader: String, nombreheader: String, fechafooter: String, ciudadfooter: String, provinciafooter: String, paisfooter: String, imagenbuttoneditar: String, imagenbuttoncerrar: String, imagenbuttoneliminar: String, imagenbanner: String, form: headeryfooterModel):Observable<headeryfooterModel>{
    
    return this.http.put<headeryfooterModel>(this.URL+'modificar/'+id+'?imagenHeaderFooter='+imagenheader+'&nombreHeaderFooter='+nombreheader+'&fechaHeaderFooter='+fechafooter+'&ciudadHeaderFooter='+ciudadfooter+'&provinciaHeaderFooter='+provinciafooter+'&paisHeaderFooter='+paisfooter+'&imagenBotonEditar='+imagenbuttoneditar+'&imagenBotonCerrar='+imagenbuttoncerrar+'&imagenBotonEliminar='+imagenbuttoneliminar+'&imagenBanner='+imagenbanner, form);
    
  }


  public getRedes():Observable<any>{
    return this.http.get(this.URL_Redes+'lista');
  }

  public getTraerUnaRed(id: any): Observable<any>{
    return this.http.get<any>(this.URL_Redes+'traer/red/'+id);
  }

  public deleteRed(id: any): Observable<any>{
    //http://localhost:8080/redes/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL_Redes+'borrar/'+ id);
  }

  public putModificarUnaRed(form: redesModel):Observable<redesModel>{    
    return this.http.put<redesModel>(this.URL_Redes+'modificar/'+form.idRed+'?nombreRed='+form.nombreRed+'&linkRed='+form.linkRed+'&imagenRed='+form.imagenRed, form);    
  }

  public postNuevaRed(form: redesModel): Observable<any>{
    return this.http.post<any>(this.URL_Redes+'crear', form);
  }
  
}
