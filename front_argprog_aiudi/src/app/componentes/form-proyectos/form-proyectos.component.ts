import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { proyectoModel } from 'src/app/model/proyecto.model';

@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css']
})
export class FormProyectosComponent implements OnInit {

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  editarFormularioProyec = new FormGroup({
    idProyectos: new FormControl(''),
    nombreDelProyecto: new FormControl(''),
    imagenProyecto: new FormControl(''),
    descripcionProyecto: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute, public alertas: AlertasService, public proyectoService: ProyectoService) { }

  proyecto: any;

  ngOnInit(): void {

    let idProyectoVariable = this.activerouter.snapshot.paramMap.get('id');

    console.log('Y ahora imprimo la id de PROYECTO desde el componente form-proyecto: ')
    console.log(idProyectoVariable);

    this.proyectoService.getTraerUnProyecto(idProyectoVariable).subscribe(data => {
      this.proyecto = data;

      console.log('Imprimo proyecto desde el formulario: ');
      console.log(this.proyecto);
      console.log('Edito el formulario');

      this.editarFormularioProyec.setValue({
        'idProyectos': this.proyecto.idProyectos, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente o como nombré cada variable en el backend
        'nombreDelProyecto': this.proyecto.nombreDelProyecto,
        'imagenProyecto': this.proyecto.imagenProyecto,
        'descripcionProyecto': this.proyecto.descripcionProyecto
      });

      console.log('Imprimo los valores editarFormularioProyec: ');
      console.log(this.editarFormularioProyec.value);

    });

  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  funcionNuevoProyecto(){
    this.router.navigate(['/formnuevoproyecto']);
  }

  funcionEliminar(){
        
    this.proyectoService.deleteProyecto(this.proyecto.idProyectos).subscribe(data => {this.proyecto = data});
        
    console.log('Se elimina el proyecto con la ID: ');
    console.log(this.proyecto.idProyectos);
        
    this.alertas.mostrarMensajeWarning('El proyecto seleccionado se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
        
  }

  envioDeFormularioProyec(form: proyectoModel){
    
    console.log('Imprimo el form desde la funcion envioDeFormularioProyec');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idProyectos = this.proyecto.idProyectos; //Variable educacion creada después del constructor

    console.log(form.idProyectos); //Ojo, los nombres son los del MODELO !!!
    console.log(form.nombreDelProyecto);
    console.log(form.imagenProyecto);
    console.log(form.descripcionProyecto);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioProyec');
    console.log(form);

    this.proyectoService.putModificarUnProyecto(form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Proyecto modificado con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');
    })

  }

}
