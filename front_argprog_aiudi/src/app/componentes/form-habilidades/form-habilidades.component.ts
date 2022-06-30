import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { habilidadesDurasModel } from 'src/app/model/habilidadesDuras.model';
import { AlertasService } from 'src/app/service/alertas.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-form-habilidades',
  templateUrl: './form-habilidades.component.html',
  styleUrls: ['./form-habilidades.component.css']
})
export class FormHabilidadesComponent implements OnInit {

  habilidades: any;
  estadoDisplayFormulario?: string;
  estadoDisplayBoton?: string;

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  editarFormularioHabilidades = new FormGroup({
    idHabDuras: new FormControl(''),
    porcentajeDuras: new FormControl(''),
    subtituloDuras: new FormControl(''),
    sizeSubTituloDuras: new FormControl('')
    });

  constructor(private activerouter: ActivatedRoute,private router: Router, public alertas: AlertasService, private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  funcionNuevaHabilidad(){

  }

  funcionEliminar(){

  }

  envioDeFormularioHabilidades(form: habilidadesDurasModel){

  }

  funcionSeleccion(id: any){
    
  }

}
