import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: any;
  //educacion: educacion = new educacion("","","","");

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacion = data});
  }

}
