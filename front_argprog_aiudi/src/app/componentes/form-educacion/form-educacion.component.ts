import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { educacionModel } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-form-educacion',
  templateUrl: './form-educacion.component.html',
  styleUrls: ['./form-educacion.component.css']
})
export class FormEducacionComponent implements OnInit {

  //Ojo, debo respetar los nombres de las variables creadas en el backend
  editarFormularioEdu = new FormGroup({
    idEducacion: new FormControl(''),
    tituloObtenidoEducacion: new FormControl(''),
    tiempoDemandadoEducacion: new FormControl(''),
    imagenEducacion: new FormControl(''),
    descripcionEducacion: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute, public alertas: AlertasService, public educacionService: EducacionService) { }

  educacion: any;

  ngOnInit(): void {

    let idEducacionVariable = this.activerouter.snapshot.paramMap.get('id');

    console.log('Y ahora imprimo la id de EDUCACION desde el componente form-educacion: ')
    console.log(idEducacionVariable);

    this.educacionService.getTraerUnaEducacion(idEducacionVariable).subscribe(data => {
      this.educacion = data;

      console.log('Imprimo educacion desde el formulario: ');
      console.log(this.educacion);
      console.log('Edito el formulario');

      this.editarFormularioEdu.setValue({
        'idEducacion': this.educacion.idEducacion, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente o como nombré cada variable en el backend
        'tituloObtenidoEducacion': this.educacion.tituloObtenidoEducacion,
        'tiempoDemandadoEducacion': this.educacion.tiempoDemandadoEducacion,
        'imagenEducacion': this.educacion.imagenEducacion,
        'descripcionEducacion': this.educacion.descripcionEducacion
      });

      console.log('Imprimo los valores editarFormularioEdu: ');
      console.log(this.editarFormularioEdu.value);

    });

  }

  funcionVolverHome(){   
    this.router.navigate(['/home']);    
  }

  funcionNuevaEducacion(){
    this.router.navigate(['/formNuevaEducacion']);
  }

  funcionEliminar(){
        
    this.educacionService.deleteEducacion(this.educacion.idEducacion).subscribe(data => {this.educacion = data});
        
    console.log('Se elimina la persona con la ID: ');
    console.log(this.educacion.idEducacion);
        
    this.alertas.mostrarMensajeWarning('La educación seleccionada se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
        
  }

  envioDeFormularioEdu(form: educacionModel){

    console.log('Imprimo el form desde la funcion envioDeFormularioEdu');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idEducacion = this.educacion.idEducacion; //Variable educacion creada después del constructor

    console.log(form.idEducacion); //Ojo, los nombres son los del MODELO !!!
    console.log(form.tituloObtenidoEducacion);
    console.log(form.tiempoDemandadoEducacion);
    console.log(form.imagenEducacion);
    console.log(form.descripcionEducacion);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioEdu');
    console.log(form);

    this.educacionService.putModificarUnaEducacion(form.idEducacion, form.tituloObtenidoEducacion, form.tiempoDemandadoEducacion, form.imagenEducacion, form.descripcionEducacion, form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Educación modificada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');
    })

  }

}
