import { Component, OnInit } from '@angular/core';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  headerfooter: any;

  constructor(private hyfService: HeaderyfooterService, private router: Router, private tokenService: TokenService) { }

  registrado = false;
  controlUsuario: boolean = false;

  ngOnInit(): void {
    this.hyfService.getHeaderFooter().subscribe(data => {this.headerfooter = data});

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
    console.log('Imprimo la ID desde el componente TS de banner: ');
    console.log(id);
    this.router.navigate(['formheaderyfooter',id]);
  }

}
