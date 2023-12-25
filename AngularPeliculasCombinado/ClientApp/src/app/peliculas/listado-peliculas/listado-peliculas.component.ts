import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() movies:any = [{}];
  constructor() { }

  ngOnInit(): void {

  }

  remove(indicePelicula:number){
    this.movies.splice(indicePelicula,1);
  }

}
