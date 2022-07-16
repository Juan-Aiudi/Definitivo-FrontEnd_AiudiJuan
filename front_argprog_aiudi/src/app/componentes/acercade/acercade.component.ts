import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personaAcDe } from 'src/app/model/personaAcDe.model';
import { PersonaAcDeService } from 'src/app/service/persona-ac-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  personaAcDe: any;

  constructor(public personaAcDeService: PersonaAcDeService, private router: Router, private tokenService: TokenService) { }

  registrado = false;
  controlUsuario: boolean = false;

  ngOnInit(): void {
    this.personaAcDeService.getPersonaAcDe().subscribe(data => {this.personaAcDe = data});

    if(this.tokenService.getToken()){
      this.registrado = true;
      console.log('Imprimo getAuthorities');
      console.log(this.tokenService.getAuthorities());
      for (let index = 0; index < this.tokenService.getAuthorities().length; index++) {
        const element = this.tokenService.getAuthorities()[index];
        console.log('Imprimo cada elemento de la tabla');
        console.log(element);
        if (element == 'ROLE_ADMIN'){
          this.controlUsuario = true;
        }
      }
    }else{
      this.registrado = false;
    }
    
    if(!this.controlUsuario){
      console.log('Imprimo controlUsuario');
      console.log(this.controlUsuario);
      console.log('Imprimo registrado antes de cambiarlo');
      console.log(this.registrado);
      this.registrado = false;
      console.log('Imprimo registrado después de cambiarlo');
      console.log(this.registrado);
    }
  }

  funcionEditar(id:any){
    console.log('Imprimo la ID desde el componente TS de acerca de: ');
    console.log(id);
    this.router.navigate(['formAcercaDe',id]);
  }

}
