import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerfooter: any;
  redes: any;

  constructor(private router: Router, private hyfService: HeaderyfooterService, private tokenService: TokenService) { }

  registrado = false;
  controlUsuario: boolean = false;

  ngOnInit(): void {
    this.hyfService.getHeaderFooter().subscribe(data => {this.headerfooter = data});
    this.hyfService.getRedes().subscribe(dataRedes => {this.redes = dataRedes});

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

  funcionLogin(){
    this.router.navigate(['']);
  }

  funcionRedes(){
    this.router.navigate(['formredes']);
  }

}
