import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { personaAcDe } from 'src/app/model/personaAcDe.model';
import { AlertasService } from 'src/app/service/alertas.service';
import { PersonaAcDeService } from 'src/app/service/persona-ac-de.service';


@Component({
  selector: 'app-form-acerca-de',
  templateUrl: './form-acerca-de.component.html',
  styleUrls: ['./form-acerca-de.component.css']
})
export class FormAcercaDeComponent implements OnInit {

  personaAcDe: any;
  
  constructor(private router: Router, private activerouter: ActivatedRoute,public personaAcDeService: PersonaAcDeService, public alertas: AlertasService) { }

  // datosPersona:personaAcDe;
  
  editarFormulario = new FormGroup({
    idAcercaDe: new FormControl(''),
    nombreAcercaDe: new FormControl(''),
    apellidoAcercaDe: new FormControl(''),
    tituloAcercaDe: new FormControl(''),
    imagenAcercaDe: new FormControl(''),
    descripcionAcercaDe: new FormControl('')
    });

  ngOnInit(): void {
    let idpersona = this.activerouter.snapshot.paramMap.get('id');
    console.log('Y ahora imprimo idpersona desde el componente form-acerca-de: ')
    console.log(idpersona);

    this.personaAcDeService.getTraerUnaPersona(idpersona).subscribe(data => {
      this.personaAcDe = data;
      console.log('Imprimo personaAcDe desde el formulario: ');
      console.log(this.personaAcDe);
      console.log('Edito el formulario');

      this.editarFormulario.setValue({
        'idAcercaDe': this.personaAcDe.idAcercaDe,
        'nombreAcercaDe': this.personaAcDe.nombreAcercaDe,
        'apellidoAcercaDe': this.personaAcDe.apellidoAcercaDe,
        'tituloAcercaDe': this.personaAcDe.tituloAcercaDe,
        'imagenAcercaDe': this.personaAcDe.imagenAcercaDe,
        'descripcionAcercaDe': this.personaAcDe.descripcionAcercaDe
      });

      console.log('Imprimo el editarFormulario: ');
      console.log(this.editarFormulario.value);

    });
        
  }

  funcionVolverHome(){   
    this.router.navigate(['/home']);    
  }

  funcionNuevo(){
    this.router.navigate(['/formNuevoAcDe']);
  }

  funcionEliminar(){    
    
    this.personaAcDeService.deletePersona(this.personaAcDe.idAcercaDe).subscribe(data => {this.personaAcDe = data});
    
    console.log('Se elimina la persona con la ID: ');
    console.log(this.personaAcDe.idAcercaDe);
    
    this.alertas.mostrarMensajeWarning('La persona seleccionada se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
    
  }

  envioDeFormulario(form: personaAcDe){
    
    form.idAcercaDe = this.personaAcDe.idAcercaDe;
    console.log('Imprimo el form');
    console.log(form);
    console.log('Imprimo cada una de las variables del form');
    console.log(form.idAcercaDe);
    console.log(form.nombreAcercaDe);
    console.log(form.apellidoAcercaDe);
    console.log(form.tituloAcercaDe);
    console.log(form.imagenAcercaDe);
    console.log(form.descripcionAcercaDe);

    this.personaAcDeService.putModificarUnaPersona(form.idAcercaDe, form.nombreAcercaDe, form.apellidoAcercaDe, form.tituloAcercaDe, form.imagenAcercaDe, form.descripcionAcercaDe, form).subscribe(data =>{
      console.log('Imprimo la data que tengo dentro de envioDeFormulario cuando llamo al putModificar: ');  
      console.log(data);
      this.alertas.mostrarMensaje('Persona modificada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');
    })
    
  }
  
}
