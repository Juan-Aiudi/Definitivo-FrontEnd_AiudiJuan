import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: any;

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data});
  }

  funcionEditar(id: any){
    console.log('Imprimo la ID desde el componente TS de proyectos: ');
    console.log(id);
    this.router.navigate(['formproyectos',id]);
  }

}
