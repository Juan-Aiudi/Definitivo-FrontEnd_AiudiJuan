import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesService } from 'src/app/service/habilidades.service';


@Component({
  selector: 'app-handsskills',
  templateUrl: './handsskills.component.html',
  styleUrls: ['./handsskills.component.css']
})
export class HandsskillsComponent implements OnInit {

  constructor(private habilidadesService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  funcionEditar(id: any){
    console.log('Imprimo la ID desde el componente TS de proyectos: ');
    console.log(id);
    this.router.navigate(['formhabilidades']);
  }

}
