import { Component, OnInit } from '@angular/core';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  headerfooter: any;

  constructor(private hyfService: HeaderyfooterService, private router: Router) { }

  ngOnInit(): void {
    this.hyfService.getHeaderFooter().subscribe(data => {this.headerfooter = data});
  }

  funcionEditar(id:any){
    console.log('Imprimo la ID desde el componente TS de banner: ');
    console.log(id);
    this.router.navigate(['formheaderyfooter',id]);
  }

}
