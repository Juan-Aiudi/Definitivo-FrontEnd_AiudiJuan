import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-handsskills',
  templateUrl: './handsskills.component.html',
  styleUrls: ['./handsskills.component.css']
})
export class HandsskillsComponent implements OnInit {

  habilidadesD: any;
  habilidadesB: any;

  constructor(private habilidadesService: HabilidadesService, private router: Router, private tokenService: TokenService, public alertas: AlertasService) { }

  registrado = false;
  controlUsuario: boolean = false;

  ngOnInit(): void {
    this.habilidadesService.getHabilidadesDuras().subscribe(dataDuras => {this.habilidadesD = dataDuras});
    this.habilidadesService.getHabilidadesBlandas().subscribe(dataBlandas => {this.habilidadesB = dataBlandas});

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

  funcionEditar(){
    if(this.registrado){
      this.router.navigate(['formhabilidades']);
    }else{
      console.log('No tiene la habilitación necesaria para editar esta opción');
      this.alertas.mostrarMensajeError('Usted no tiene la habilitación necesaria para editar esta opción', 'Atención !!!');
    }
    
  }

}
