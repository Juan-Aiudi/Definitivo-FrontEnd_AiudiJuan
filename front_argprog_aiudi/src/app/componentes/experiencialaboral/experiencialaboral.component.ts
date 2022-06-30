import { Component, OnInit } from '@angular/core';
import { ExperiencialabService } from 'src/app/service/experiencialab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {

  experiencialab: any;

  constructor(private experienciaLabService: ExperiencialabService, private router: Router) { }

  ngOnInit(): void {
    this.experienciaLabService.getExperienciaLaboral().subscribe(data =>{this.experiencialab = data});
  }

  funcionEditar(id:any){
    console.log('Imprimo la ID desde el componente TS de experiencia laboral: ');
    console.log(id);
    this.router.navigate(['formExperienciaLab',id]);
  }

}
