import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personaAcDe } from 'src/app/model/personaAcDe.model';
import { PersonaAcDeService } from 'src/app/service/persona-ac-de.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  personaAcDe: any;

  constructor(public personaAcDeService: PersonaAcDeService, private router: Router) { }

  ngOnInit(): void {
    this.personaAcDeService.getPersonaAcDe().subscribe(data => {this.personaAcDe = data});
  }

  funcionEditar(id:any){
    console.log('Imprimo la ID desde el componente TS de acerca de: ');
    console.log(id);
    this.router.navigate(['formAcercaDe',id]);
  }

}
