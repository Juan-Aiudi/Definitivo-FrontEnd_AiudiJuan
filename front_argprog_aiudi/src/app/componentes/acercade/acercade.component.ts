import { Component, OnInit } from '@angular/core';
import { personaAcDe } from 'src/app/model/personaAcDe.model';
import { PersonaAcDeService } from 'src/app/service/persona-ac-de.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  personaAcDe: personaAcDe = new personaAcDe("","","","","");

  constructor(public personaAcDeService: PersonaAcDeService) { }

  ngOnInit(): void {
    this.personaAcDeService.getPersonaAcDe().subscribe(data => {this.personaAcDe = data});
  }

}
