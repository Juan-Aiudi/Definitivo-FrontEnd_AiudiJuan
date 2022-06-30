import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerfooter: any;
  redes: any;

  constructor(private router: Router, private hyfService: HeaderyfooterService) { }

  ngOnInit(): void {
    this.hyfService.getHeaderFooter().subscribe(data => {this.headerfooter = data});
    this.hyfService.getRedes().subscribe(dataRedes => {this.redes = dataRedes});
  }

  funcionLogin(){
    this.router.navigate(['']);
  }

  funcionRedes(){
    this.router.navigate(['formredes']);
  }

}
