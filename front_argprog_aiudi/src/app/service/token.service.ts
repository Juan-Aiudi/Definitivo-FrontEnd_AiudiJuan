import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITHIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY); //Elimino el token existente
    window.sessionStorage.setItem(TOKEN_KEY, token); //Copio el token nuevo en la constante
  }

  public getToken(): string{
    return sessionStorage.getItem(TOKEN_KEY)!; //Coloco el signo !
  }

  public setUserName(userName: string): void{
    window.sessionStorage.removeItem(USERNAME_KEY); //Elimino el token existente
    window.sessionStorage.setItem(USERNAME_KEY, userName); //Copio el token nuevo en la constante
  }

  public getUserName(): string{
    return sessionStorage.getItem(USERNAME_KEY)!; //Coloco el signo !
  }

  public setAuthorities(authorities: string[]): void{
    window.sessionStorage.removeItem(AUTHORITHIES_KEY);
    window.sessionStorage.setItem(AUTHORITHIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITHIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITHIES_KEY)!).forEach((authority:any) => {
        this.roles.push(authority.authority);        
      });
    }
    return this.roles;
  }

  public logOut(): void{
    window.sessionStorage.clear();
  }

}
