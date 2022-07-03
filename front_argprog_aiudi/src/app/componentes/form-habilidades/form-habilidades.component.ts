import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { habilidadesDurasModel } from 'src/app/model/habilidadesDuras.model';
import { habilidadesBlandasModel } from 'src/app/model/habilidadesBlandas.model';
import { AlertasService } from 'src/app/service/alertas.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-form-habilidades',
  templateUrl: './form-habilidades.component.html',
  styleUrls: ['./form-habilidades.component.css']
})
export class FormHabilidadesComponent implements OnInit {

  habilidad: any;
  habilidadesD: any;
  habilidadesB: any;
  habilidades: any;
  estadoDisplayFormularioDuras?: string;
  estadoDisplayFormularioBlandas?: string;
  estadoDisplayBoton?: string;
  estadoDisplayBotonEleccion?: string;
  estadoDisplayDuras?: string;
  estadoDisplayBlandas?: string;
  tipoHabilidad?: boolean;

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
    this.estadoDisplayDuras = 'none';
    this.estadoDisplayBlandas = 'none';
    this.habilidadesService.getHabilidadesDuras().subscribe(dataDuras => {this.habilidadesD = dataDuras});
    this.habilidadesService.getHabilidadesBlandas().subscribe(dataBlandas => {this.habilidadesB = dataBlandas});
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  eleccion(tipo: boolean){
    if (tipo == true){
      this.estadoDisplayBotonEleccion = 'none';
      this.estadoDisplayDuras = 'block';
      this.estadoDisplayBlandas = 'none';
      this.habilidades  = this.habilidadesD;
      this.tipoHabilidad = true;
    }else{
      this.estadoDisplayBotonEleccion = 'none';
      this.estadoDisplayBlandas = 'block';
      this.estadoDisplayDuras = 'none';
      this.habilidades = this.habilidadesB;
      this.tipoHabilidad = false;
    }
  }

  funcionNuevaHabilidad(){
    this.router.navigate(['formnuevahabilidad']);
  }

  funcionEliminar(){
    if (this.tipoHabilidad == true){
      this.habilidadesService.deleteHabilidadDura(this.habilidad.idHabDuras).subscribe(data => {this.habilidad = data});
        
      console.log(this.habilidad.idHabDuras);
      console.log('Se elimina la habilidad con la ID: ');
        
      this.alertas.mostrarMensajeWarning('La HABILIDAD seleccionada se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
    }else{
      this.habilidadesService.deleteHabilidadBlanda(this.habilidad.idHabBlandas).subscribe(data => {this.habilidad = data});
        
      console.log(this.habilidad.idHabBlandas);
      console.log('Se elimina la habilidad con la ID: ');
        
      this.alertas.mostrarMensajeWarning('La HABILIDAD seleccionada se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
    }
  }

  envioDeFormularioHabilidadesDuras(form: habilidadesDurasModel){
    console.log('Imprimo el form desde la funcion envioDeFormularioHabilidadesDuras');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idHabDuras = this.habilidad.idHabDuras; //Variable habilidad creada después del constructor
    
    console.log(form.idHabDuras); //Ojo, los nombres son los del MODELO !!!
    console.log(form.subtituloDuras);
    console.log(form.porcentajeDuras);
    console.log(form.sizeSubTituloDuras);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioHabilidadesDuras');
    console.log(form);

    this.habilidadesService.putModificarUnaHabDura(form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Habilidad dura modificada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');

    })
  }

  envioDeFormularioHabilidadesBlandas(form: habilidadesBlandasModel){
    console.log('Imprimo el form desde la funcion envioDeFormularioHabilidadesBlandas');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idHabBlandas = this.habilidad.idHabBlandas; //Variable red creada después del constructor

    console.log(form.idHabBlandas); //Ojo, los nombres son los del MODELO !!!
    console.log(form.subtituloBlandas);
    console.log(form.porcentajeBlandas);
    console.log(form.sizeSubTituloBlandas);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioHabilidadesBlandas');
    console.log(form);

    this.habilidadesService.putModificarUnaHabBlanda(form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Habilidad blanda modificada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');

    })
  }

  funcionSeleccion(id: any, tipo: boolean){
    
    this.estadoDisplayBoton = 'none';
    console.log('Imprimo la ID desde el componente TS de form-habilidades: ');
    console.log(id);

    if (tipo == true){
      this.estadoDisplayFormularioDuras = 'block';
      this.estadoDisplayDuras = 'block';
      this.tipoHabilidad = true;
      this.habilidadesService.getTraerUnaHabilidadDura(id).subscribe(data => {
        this.habilidad = data;
  
        console.log('Imprimo habilidad desde el formulario: ');
        console.log(this.habilidad);
        console.log('Edito el formulario');
  
        this.editarFormularioHabilidadesDuras.setValue({
        'idHabDuras': this.habilidad.idHabDuras, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente o como nombré cada variable en el backend
        'porcentajeDuras': this.habilidad.porcentajeDuras,
        'subtituloDuras': this.habilidad.subtituloDuras,
        'sizeSubTituloDuras': this.habilidad.sizeSubTituloDuras
        });
  
        console.log('Imprimo los valores editarFormularioHabilidades: ');
        console.log(this.editarFormularioHabilidadesDuras.value);
  
      });
    }else{
      this.estadoDisplayFormularioBlandas = 'block';
      this.estadoDisplayBlandas = 'block';
      this.tipoHabilidad = false;
      this.habilidadesService.getTraerUnaHabilidadBlanda(id).subscribe(data => {
        this.habilidad = data;
  
        console.log('Imprimo habilidad desde el formulario: ');
        console.log(this.habilidad);
        console.log('Edito el formulario');
  
        this.editarFormularioHabilidadesBlandas.setValue({
        'idHabBlandas': this.habilidad.idHabBlandas, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente o como nombré cada variable en el backend
        'porcentajeBlandas': this.habilidad.porcentajeBlandas,
        'subtituloBlandas': this.habilidad.subtituloBlandas,
        'sizeSubTituloBlandas': this.habilidad.sizeSubTituloBlandas
        });
  
        console.log('Imprimo los valores editarFormularioHabilidades: ');
        console.log(this.editarFormularioHabilidadesBlandas.value);
  
      });
    }  
  }

}




