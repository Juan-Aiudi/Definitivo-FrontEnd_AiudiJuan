import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertasService } from 'src/app/service/alertas.service';
import { experienciaLabModel } from 'src/app/model/experienciaLab.model';
import { ExperiencialabService } from 'src/app/service/experiencialab.service';

@Component({
  selector: 'app-form-nueva-experiencia',
  templateUrl: './form-nueva-experiencia.component.html',
  styleUrls: ['./form-nueva-experiencia.component.css']
})
export class FormNuevaExperienciaComponent implements OnInit {

  nuevoFormularioExp = new FormGroup({
    //idAcercaDe: new FormControl(''),
    lugarExpLab: new FormControl(''),
    actualoAnterioryTiempoExpLab: new FormControl(''),
    imagenExpLab: new FormControl(''),
    descripcionExpLab: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute,public experLaboService: ExperiencialabService, public alertas: AlertasService) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  envioDeFormularioExp(form: experienciaLabModel){
    console.log('Imprimo desde la función anvioDeFormularioExp desde el componente NUEVO FORMULARIO');
    console.log(form);

    this.experLaboService.postNuevaExperiencia(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormulario cuando llamo al método post');
      console.log(data);      
    });

    this.alertas.mostrarMensaje('Experiencia agregada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');    
  }

}
