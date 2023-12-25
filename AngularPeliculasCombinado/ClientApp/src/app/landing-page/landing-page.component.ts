import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  peliculasEnCines: any;
  peliculasProximosEstrenos:any = [];

  constructor() { }

  ngOnInit(): void {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man: Far From Home',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_far_from_home_ver7_xlg_1024x1024@2x.jpg?v=1629060407'
        },
        {
          titulo: 'Mohana',
          fechaLanzamiento: new Date(),
          precio: 1900.99,
          poster: 'https://m.media-amazon.com/images/I/A1JOaV3B6fL._AC_UF894,1000_QL80_.jpg'
        }
      ]
  }
}
