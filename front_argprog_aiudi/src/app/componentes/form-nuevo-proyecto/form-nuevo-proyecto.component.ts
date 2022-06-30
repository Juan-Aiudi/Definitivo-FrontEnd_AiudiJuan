import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertasService } from 'src/app/service/alertas.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { proyectoModel } from 'src/app/model/proyecto.model';

@Component({
  selector: 'app-form-nuevo-proyecto',
  templateUrl: './form-nuevo-proyecto.component.html',
  styleUrls: ['./form-nuevo-proyecto.component.css']
})
export class FormNuevoProyectoComponent implements OnInit {

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  nuevoFormularioProyec = new FormGroup({
    nombreDelProyecto: new FormControl(''),
    imagenProyecto: new FormControl(''),
    descripcionProyecto: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute, public alertas: AlertasService, public proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  envioDeFormularioProyec(form: proyectoModel){
    console.log('Imprimo desde la función envioDeFormularioProyec desde el componente NUEVO FORMULARIO');
    console.log(form);

    this.proyectoService.postNuevoProyecto(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormulario cuando llamo al método post');
      console.log(data);      
    });

    this.alertas.mostrarMensaje('Proyecto agregado con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!'); 
  }

}
