import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesService } from 'src/app/service/habilidades.service';


@Component({
  selector: 'app-handsskills',
  templateUrl: './handsskills.component.html',
  styleUrls: ['./handsskills.component.css']
})
export class HandsskillsComponent implements OnInit {

  habilidadesD: any;
  habilidadesB: any;

  constructor(private habilidadesService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
    this.habilidadesService.getHabilidadesDuras().subscribe(dataDuras => {this.habilidadesD = dataDuras});
    this.habilidadesService.getHabilidadesBlandas().subscribe(dataBlandas => {this.habilidadesB = dataBlandas});
  }

  funcionEditar(){
    this.router.navigate(['formhabilidades']);
  }

}
