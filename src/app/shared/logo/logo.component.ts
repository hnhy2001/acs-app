import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'logo-component',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    margin: 45,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 4
      },
      768: {
        items: 6
      },
      992: {
        items: 8
      }
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
