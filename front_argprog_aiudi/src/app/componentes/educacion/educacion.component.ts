import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: any;
  
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacion = data});
  }

  funcionEditar(id:any){
    console.log('Imprimo la ID desde el componente TS de educacion: ');
    console.log(id);
    this.router.navigate(['formEducacion',id]);
  }

}
