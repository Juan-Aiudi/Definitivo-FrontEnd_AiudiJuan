import { Component, OnInit } from '@angular/core';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  headerfooter: any;

  constructor(private hyfService: HeaderyfooterService) { }

  ngOnInit(): void {
    this.hyfService.getHeaderFooter().subscribe(data => {this.headerfooter = data});
  }

}
