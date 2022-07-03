import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAcercaDeComponent } from './componentes/form-acerca-de/form-acerca-de.component';
import { FormEducacionComponent } from './componentes/form-educacion/form-educacion.component';
import { FormExperienciaComponent } from './componentes/form-experiencia/form-experiencia.component';
import { FormHabilidadesComponent } from './componentes/form-habilidades/form-habilidades.component';
import { FormHeaderyfooterComponent } from './componentes/form-headeryfooter/form-headeryfooter.component';
import { FormNuevaEducacionComponent } from './componentes/form-nueva-educacion/form-nueva-educacion.component';
import { FormNuevaExperienciaComponent } from './componentes/form-nueva-experiencia/form-nueva-experiencia.component';
import { FormNuevaHabilidadComponent } from './componentes/form-nueva-habilidad/form-nueva-habilidad.component';
import { FormNuevaRedComponent } from './componentes/form-nueva-red/form-nueva-red.component';
import { FormNuevoAcDeComponent } from './componentes/form-nuevo-ac-de/form-nuevo-ac-de.component';
import { FormNuevoProyectoComponent } from './componentes/form-nuevo-proyecto/form-nuevo-proyecto.component';
import { FormProyectosComponent } from './componentes/form-proyectos/form-proyectos.component';
import { FormRedesComponent } from './componentes/form-redes/form-redes.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent}, //Si es localhost:4200 me direcciona al Componente Home
  {path:'', component: LoginComponent}, //Pero, si es localhost:4200/login me redirecciona al Componente Login
  {path:'formAcercaDe/:id', component: FormAcercaDeComponent},
  {path:'formNuevoAcDe', component: FormNuevoAcDeComponent},
  {path:'formNuevaExp', component: FormNuevaExperienciaComponent},
  {path:'formExperienciaLab/:id', component: FormExperienciaComponent},
  {path:'formNuevaEducacion', component: FormNuevaEducacionComponent},
  {path:'formEducacion/:id', component: FormEducacionComponent},
  {path:'formheaderyfooter/:id', component: FormHeaderyfooterComponent},
  {path:'formproyectos/:id', component: FormProyectosComponent},
  {path:'formnuevoproyecto', component: FormNuevoProyectoComponent},
  {path:'formredes', component: FormRedesComponent},
  {path:'formnuevared', component: FormNuevaRedComponent},
  {path:'formhabilidades', component: FormHabilidadesComponent},
  {path:'formnuevahabilidad', component: FormNuevaHabilidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
