import { Component, OnInit } from '@angular/core';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { redesModel } from 'src/app/model/redes.model';

@Component({
  selector: 'app-form-redes',
  templateUrl: './form-redes.component.html',
  styleUrls: ['./form-redes.component.css']
})
export class FormRedesComponent implements OnInit {

  redes: any;
  estadoDisplayFormulario?: string;
  estadoDisplayBoton?: string;

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  editarFormularioRedes = new FormGroup({
    idRed: new FormControl(''),
    nombreRed: new FormControl(''),
    linkRed: new FormControl(''),
    imagenRed: new FormControl('')
    });

  constructor(private activerouter: ActivatedRoute,private router: Router, public alertas: AlertasService, private hyfService: HeaderyfooterService) { }

  red: any;

  ngOnInit(): void {
    this.estadoDisplayFormulario = 'none';
    this.estadoDisplayBoton = 'block';
    this.hyfService.getRedes().subscribe(dataRedes => {this.redes = dataRedes});
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  funcionNuevaRed(){
    this.router.navigate(['formnuevared']);
  }

  funcionEliminar(){
    this.hyfService.deleteRed(this.red.idRed).subscribe(data => {this.red = data});
        
    console.log('Se elimina la red con la ID: ');
    console.log(this.red.idRed);
        
    this.alertas.mostrarMensajeWarning('La RED seleccionada se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
  }

  envioDeFormularioRedes(form: any){
    
    console.log('Imprimo el form desde la funcion envioDeFormularioRedes');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idRed = this.red.idRed; //Variable red creada después del constructor

    console.log(form.idRed); //Ojo, los nombres son los del MODELO !!!
    console.log(form.nombreRed);
    console.log(form.linkRed);
    console.log(form.imagenRed);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioRedes');
    console.log(form);

    this.hyfService.putModificarUnaRed(form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Red modificada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');

    })
  }

  funcionSeleccion(id: any){
    this.estadoDisplayBoton = 'none';
    this.estadoDisplayFormulario = 'block';

    console.log('Imprimo la ID desde el componente TS de form-redes: ');
    console.log(id);

    this.hyfService.getTraerUnaRed(id).subscribe(data => {
      this.red = data;

      console.log('Imprimo red desde el formulario: ');
      console.log(this.red);
      console.log('Edito el formulario');

      this.editarFormularioRedes.setValue({
      'idRed': this.red.idRed, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente o como nombré cada variable en el backend
      'nombreRed': this.red.nombreRed,
      'linkRed': this.red.linkRed,
      'imagenRed': this.red.imagenRed
      });

      console.log('Imprimo los valores editarFormularioRedes: ');
      console.log(this.editarFormularioRedes.value);

    });
  
  }


  /*
    
  */
  
}
