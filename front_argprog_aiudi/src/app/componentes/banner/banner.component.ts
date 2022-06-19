import { Component, OnInit } from '@angular/core';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  headerfooter: any;

  constructor(private hyfService: HeaderyfooterService) { }

  ngOnInit(): void {
    this.hyfService.getHeaderFooter().subscribe(data => {this.headerfooter = data});
  }

}
