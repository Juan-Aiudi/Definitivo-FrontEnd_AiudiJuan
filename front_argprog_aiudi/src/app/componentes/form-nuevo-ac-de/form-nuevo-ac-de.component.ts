import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { personaAcDe } from 'src/app/model/personaAcDe.model';
import { AlertasService } from 'src/app/service/alertas.service';
import { PersonaAcDeService } from 'src/app/service/persona-ac-de.service';

@Component({
  selector: 'app-form-nuevo-ac-de',
  templateUrl: './form-nuevo-ac-de.component.html',
  styleUrls: ['./form-nuevo-ac-de.component.css']
})
export class FormNuevoAcDeComponent implements OnInit {

  nuevoFormulario = new FormGroup({
    //idAcercaDe: new FormControl(''),
    nombreAcercaDe: new FormControl(''),
    apellidoAcercaDe: new FormControl(''),
    tituloAcercaDe: new FormControl(''),
    imagenAcercaDe: new FormControl(''),
    descripcionAcercaDe: new FormControl('')
    });
  
  constructor(private router: Router, private activerouter: ActivatedRoute,public personaAcDeService: PersonaAcDeService, public alertas: AlertasService) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

  envioDeFormulario(form: personaAcDe){
    console.log('Imprimo desde la función anvioFormulario desde el componente NUEVO FORMULARIO');
    console.log(form);
    this.personaAcDeService.postNuevaPersona(form).subscribe( data =>{
      console.log('Imprimo la data desde la función envioDeFormulario cuando llamo al método post');
      console.log(data);      
    })
    this.alertas.mostrarMensaje('Persona agregada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');    
  }

}
