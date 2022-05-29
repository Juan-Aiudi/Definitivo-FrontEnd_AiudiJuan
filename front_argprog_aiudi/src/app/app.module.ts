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
import { HttpClientModule } from '@angular/common/http'//Agregamos este servicio para conectarnos con el back

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule //Agregamos este servicio para conectarnos con el back
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
