import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperiencialaboralComponent } from './componentes/experiencialaboral/experiencialaboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HandsskillsComponent } from './componentes/handsskills/handsskills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormAcercaDeComponent } from './componentes/form-acerca-de/form-acerca-de.component'//Agregamos este servicio para conectarnos con el back
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormNuevoAcDeComponent } from './componentes/form-nuevo-ac-de/form-nuevo-ac-de.component';
import { FormExperienciaComponent } from './componentes/form-experiencia/form-experiencia.component';
import { FormNuevaExperienciaComponent } from './componentes/form-nueva-experiencia/form-nueva-experiencia.component';
import { FormEducacionComponent } from './componentes/form-educacion/form-educacion.component';
import { FormNuevaEducacionComponent } from './componentes/form-nueva-educacion/form-nueva-educacion.component';
import { FormHeaderyfooterComponent } from './componentes/form-headeryfooter/form-headeryfooter.component';
import { FormProyectosComponent } from './componentes/form-proyectos/form-proyectos.component';
import { FormNuevoProyectoComponent } from './componentes/form-nuevo-proyecto/form-nuevo-proyecto.component';
import { FormRedesComponent } from './componentes/form-redes/form-redes.component';
import { FormNuevaRedComponent } from './componentes/form-nueva-red/form-nueva-red.component';
import { FormHabilidadesComponent } from './componentes/form-habilidades/form-habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercadeComponent,
    ExperiencialaboralComponent,
    EducacionComponent,
    HandsskillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    FormAcercaDeComponent,
    FormNuevoAcDeComponent,
    FormExperienciaComponent,
    FormNuevaExperienciaComponent,
    FormEducacionComponent,
    FormNuevaEducacionComponent,
    FormHeaderyfooterComponent,
    FormProyectosComponent,
    FormNuevoProyectoComponent,
    FormRedesComponent,
    FormNuevaRedComponent,
    FormHabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule, //Agregamos este servicio para conectarnos con el back
    FormsModule, 
    ReactiveFormsModule, //Para poder utilizar formGroup
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
