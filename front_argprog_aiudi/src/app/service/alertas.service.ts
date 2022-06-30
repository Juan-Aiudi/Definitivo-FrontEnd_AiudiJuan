import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toastr:ToastrService) { }


  mostrarMensaje(texto:string, titulo:string){
    this.toastr.success(texto, titulo);
    
  }

  mostrarMensajeError(texto:string, titulo:string){
    this.toastr.error(texto, titulo);
  }

  mostrarMensajeInfo(texto:string, titulo:string){
    this.toastr.info(texto, titulo);
  }

  mostrarMensajeWarning(texto:string, titulo:string){
    this.toastr.warning(texto, titulo);
  }

}
