import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidadesBlandasModel } from '../model/habilidadesBlandas.model';
import { habilidadesDurasModel } from '../model/habilidadesDuras.model';


@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  //URL_Duras = 'http://localhost:8080/habduras/';
  //URL_Blandas = 'http://localhost:8080/habblandas/';

  URL_Duras = 'https://app-arg-prog-aiudi-juan-back.herokuapp.com/habduras/'
  URL_Blandas = 'https://app-arg-prog-aiudi-juan-back.herokuapp.com/habblandas/'

  constructor(private http: HttpClient) { }

  public getHabilidadesDuras():Observable<any>{
    return this.http.get(this.URL_Duras+'lista');
  }

  public getHabilidadesBlandas():Observable<any>{
    return this.http.get(this.URL_Blandas+'lista');
  }

  public getTraerUnaHabilidadDura(id: any): Observable<habilidadesDurasModel>{
    return this.http.get<habilidadesDurasModel>(this.URL_Duras+'traer/habilidad/'+id);
  }

  public getTraerUnaHabilidadBlanda(id: any): Observable<habilidadesBlandasModel>{
    return this.http.get<habilidadesBlandasModel>(this.URL_Blandas+'traer/habilidad/'+id);
  }

  public postNuevaHabDura(form: habilidadesDurasModel): Observable<any>{
    return this.http.post<any>(this.URL_Duras+'crear', form);
  }

  public postNuevaHabBlanda(form: habilidadesBlandasModel): Observable<any>{
    return this.http.post<any>(this.URL_Blandas+'crear', form);
  }

  public deleteHabilidadDura(id: any): Observable<any>{
    //http://localhost:8080/habduras/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL_Duras+'borrar/'+ id);
  }

  public deleteHabilidadBlanda(id: any): Observable<any>{
    //http://localhost:8080/habblandas/borrar/2
    console.log('Imprimo el id desde la funcion delete');
    console.log(id);
    return this.http.delete<any>(this.URL_Blandas+'borrar/'+ id);
  }


  public putModificarUnaHabDura(form: habilidadesDurasModel): Observable<any>{
    return this.http.put<any>(this.URL_Duras+'modificar/'+form.idHabDuras+'?porcentajeDuras='+form.porcentajeDuras+'&subtituloDuras='+form.subtituloDuras+'&sizeSubTituloDuras='+form.sizeSubTituloDuras, form);
  }

  public putModificarUnaHabBlanda(form: habilidadesBlandasModel): Observable<any>{
    return this.http.put<any>(this.URL_Blandas+'modificar/'+form.idHabBlandas+'?porcentajeBlandas='+form.porcentajeBlandas+'&subtituloBlandas='+form.subtituloBlandas+'&sizeSubTituloBlandas='+form.sizeSubTituloBlandas, form);
  }

}