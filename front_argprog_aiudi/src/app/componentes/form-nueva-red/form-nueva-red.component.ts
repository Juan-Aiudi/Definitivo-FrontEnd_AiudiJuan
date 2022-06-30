import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertasService } from 'src/app/service/alertas.service';
import { redesModel } from 'src/app/model/redes.model';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';

@Component({
  selector: 'app-form-nueva-red',
  templateUrl: './form-nueva-red.component.html',
  styleUrls: ['./form-nueva-red.component.css']
})
export class FormNuevaRedComponent implements OnInit {

  //Ojo con el FORMULARIO. Debo respetar los nombres de las variables del backend
  editarFormularioRedes = new FormGroup({
    nombreRed: new FormControl(''),
    linkRed: new FormControl(''),
    imagenRed: new FormControl('')
    });

  constructor(private activerouter: ActivatedRoute,private router: Router, public alertas: AlertasService, private hyfService: HeaderyfooterService) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  envioDeFormularioRedes(form: redesModel){
    console.log('Imprimo desde la función anvioDeFormularioRedes desde el componente NUEVO FORMULARIO');
    console.log(form);

    this.hyfService.postNuevaRed(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormulario cuando llamo al método post');
      console.log(data);      
    });

    this.alertas.mostrarMensaje('Red agregada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');    
  }

}
