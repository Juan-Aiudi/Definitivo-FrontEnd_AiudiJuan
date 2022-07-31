import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/loginUsuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  estadoSpinner?:string;
  estadoMostrarhide1?:string;
  estadoMostrarhide2?:string;
  controlhide = false;
  tipo?: any;

  constructor(private router: Router, private tokenService: TokenService, private authService: AuthService, public alertas: AlertasService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    this.estadoSpinner = 'none';
    this.estadoMostrarhide1 = 'none';
    this.estadoMostrarhide2 = 'block';
    this.tipo = 'password'; //Por fin logré hacer q se muestre la password. En HTML tenía q ir [type]
  }

  
  miFuncion(){    
    if(this.controlhide == false){
      this.estadoMostrarhide1 = 'block';
      this.estadoMostrarhide2 = 'none';
      this.tipo = 'text';
      this.controlhide = true;
    }else{
      this.estadoMostrarhide1 = 'none';
      this.estadoMostrarhide2 = 'block';
      this.tipo = 'password';
      this.controlhide = false;
    }
    
  }

  nuevoUsuario(){
    this.router.navigate(['/formnuevousuario']);
  }

  onLogin(): void{
    this.estadoSpinner = 'block';
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        console.log('Imprimo data.authorities desde la función onLogin en el componente login');
        console.log(data.authorities);
        this.router.navigate(['/home']);
      }, err =>{
        this.estadoSpinner = 'none';
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log("Imprimo el error desde la función onLogin");
        console.log(this.errMsj);
        this.alertas.mostrarMensajeError('Los datos ingresados son incorrectos', 'Atención !!!');
      }
    )
  }

}
