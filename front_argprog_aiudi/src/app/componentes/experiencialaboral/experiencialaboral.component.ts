import { Component, OnInit } from '@angular/core';
import { ExperiencialabService } from 'src/app/service/experiencialab.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {

  experiencialab: any;

  constructor(private experienciaLabService: ExperiencialabService, private router: Router, private tokenService: TokenService) { }

  registrado = false;
  controlUsuario: boolean = false;
  
  ngOnInit(): void {

    this.experienciaLabService.getExperienciaLaboral().subscribe(data =>{this.experiencialab = data});
    
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
    console.log('Imprimo la ID desde el componente TS de experiencia laboral: ');
    console.log(id);
    this.router.navigate(['formExperienciaLab',id]);
  }

}
