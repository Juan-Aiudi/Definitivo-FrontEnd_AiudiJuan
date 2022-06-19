import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-nuevo-ac-de',
  templateUrl: './form-nuevo-ac-de.component.html',
  styleUrls: ['./form-nuevo-ac-de.component.css']
})
export class FormNuevoAcDeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  funcionVolverHome(){    
    this.router.navigate(['/home']);    
  }

}
