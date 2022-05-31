import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: any;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data});
  }

}
