import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAcercaDeComponent } from './componentes/form-acerca-de/form-acerca-de.component';
import { FormNuevoAcDeComponent } from './componentes/form-nuevo-ac-de/form-nuevo-ac-de.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent}, //Si es localhost:4200 me direcciona al Componente Home
  {path:'', component: LoginComponent}, //Pero, si es localhost:4200/login me redirecciona al Componente Login
  {path:'formAcercaDe/:id', component: FormAcercaDeComponent},
  {path:'formNuevoAcDe', component: FormNuevoAcDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
