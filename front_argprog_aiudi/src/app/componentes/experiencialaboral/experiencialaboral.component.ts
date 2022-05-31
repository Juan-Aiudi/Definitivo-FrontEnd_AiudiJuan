import { Component, OnInit } from '@angular/core';
import { ExperiencialabService } from 'src/app/service/experiencialab.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.css']
})
export class ExperiencialaboralComponent implements OnInit {

  experiencialab: any;

  constructor(private experienciaLabService: ExperiencialabService) { }

  ngOnInit(): void {
    this.experienciaLabService.getExperienciaLaboral().subscribe(data =>{this.experiencialab = data});
  }

}
