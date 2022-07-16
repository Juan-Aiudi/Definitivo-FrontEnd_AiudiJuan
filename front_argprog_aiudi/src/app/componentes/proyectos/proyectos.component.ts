import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: any;

  constructor(private proyectoService: ProyectoService, private router: Router, private tokenService: TokenService, public alertas: AlertasService) { }

  registrado = false;
  controlUsuario: boolean = false;

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data});

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

  funcionEditar(id: any){
    if(this.registrado){
      console.log('Imprimo la ID desde el componente TS de proyectos: ');
      console.log(id);
      this.router.navigate(['formproyectos',id]);
    }else{
      console.log('No tiene la habilitación necesaria para editar esta opción');
      this.alertas.mostrarMensajeError('Usted no tiene la habilitación necesaria para editar esta opción', 'Atención !!!');
    }
    
  }

}
