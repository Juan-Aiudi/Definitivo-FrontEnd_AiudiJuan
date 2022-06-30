import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertasService } from 'src/app/service/alertas.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { educacionModel } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-form-nueva-educacion',
  templateUrl: './form-nueva-educacion.component.html',
  styleUrls: ['./form-nueva-educacion.component.css']
})
export class FormNuevaEducacionComponent implements OnInit {

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  nuevoFormularioEdu = new FormGroup({
    tituloObtenidoEducacion: new FormControl(''),
    tiempoDemandadoEducacion: new FormControl(''),
    imagenEducacion: new FormControl(''),
    descripcionEducacion: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute, public alertas: AlertasService, public educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  envioDeFormularioEdu(form: educacionModel){
    console.log('Imprimo desde la función envioDeFormularioEdu desde el componente NUEVO FORMULARIO');
    console.log(form);

    this.educacionService.postNuevaEducacion(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormulario cuando llamo al método post');
      console.log(data);      
    });

    this.alertas.mostrarMensaje('Educación agregada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');    
  }

}
