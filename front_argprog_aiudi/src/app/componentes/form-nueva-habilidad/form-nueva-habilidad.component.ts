import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { habilidadesDurasModel } from 'src/app/model/habilidadesDuras.model';
import { habilidadesBlandasModel } from 'src/app/model/habilidadesBlandas.model';
import { AlertasService } from 'src/app/service/alertas.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-form-nueva-habilidad',
  templateUrl: './form-nueva-habilidad.component.html',
  styleUrls: ['./form-nueva-habilidad.component.css']
})
export class FormNuevaHabilidadComponent implements OnInit {

  estadoDisplayFormularioDuras?: string;
  estadoDisplayFormularioBlandas?: string;
  estadoDisplayBotonEleccion?: string;
  habilidadSeleccionada: any;

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  editarFormularioHabilidadesDuras = new FormGroup({
    idHabDuras: new FormControl(''),
    subtituloDuras: new FormControl(''),
    porcentajeDuras: new FormControl(''),
    sizeSubTituloDuras: new FormControl('')
    });

  editarFormularioHabilidadesBlandas = new FormGroup({
    idHabBlandas: new FormControl(''),
    subtituloBlandas: new FormControl(''),
    porcentajeBlandas: new FormControl(''),
    sizeSubTituloBlandas: new FormControl('')
    });

  constructor(private router: Router, public alertas: AlertasService, private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    this.estadoDisplayFormularioDuras = 'none';
    this.estadoDisplayFormularioBlandas = 'none';
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  eleccion(valor: boolean){
    if (valor == true){
      this.habilidadSeleccionada = true;
      this.estadoDisplayFormularioBlandas = 'none';
      this.estadoDisplayFormularioDuras = 'block';
    }else{
      this.habilidadSeleccionada = false;
      this.estadoDisplayFormularioDuras = 'none';
      this.estadoDisplayFormularioBlandas = 'block';
    }
  }

  envioDeFormularioHabilidadesDuras(form: habilidadesDurasModel){

    console.log('Imprimo desde la función envioDeFormularioHabilidadesDuras desde el componente NUEVO FORMULARIO');
    console.log(form);

    this.habilidadesService.postNuevaHabDura(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormularioHabilidadesDuras cuando llamo al método post');
      console.log(data);      
    });

    this.alertas.mostrarMensaje('Habilidad dura agregada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');

  }

  envioDeFormularioHabilidadesBlandas(form: habilidadesBlandasModel){

    console.log('Imprimo desde la función envioDeFormularioHabilidadesBlandas desde el componente NUEVO FORMULARIO');
    console.log(form);

    this.habilidadesService.postNuevaHabBlanda(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormularioHabilidadesBlandas cuando llamo al método post');
      console.log(data);      
    });

    this.alertas.mostrarMensaje('Habilidad blanda agregada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');

  }

}
