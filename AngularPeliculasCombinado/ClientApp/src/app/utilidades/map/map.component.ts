import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, Marker, marker, LeafletMouseEvent, icon } from 'leaflet';
import { Coordenate } from 'src/app/models/coordenate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() initialCoordenates: Coordenate[] = [];
  @Output() coordenateSelected: EventEmitter<Coordenate> = new EventEmitter<Coordenate>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(18.977331630814813, -99.12723541259767)
  };

  layers:Marker<any>[] = [  ];

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordenates.map(value => marker([value.latitude, value.longitude]));
  }

  handleClick(event: LeafletMouseEvent): void {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = [];
    this.layers.push(marker([latitude, longitude], {
      icon:icon({ iconSize: [ 25, 41 ], iconAnchor:[13,41],iconUrl:'marker-icon.png', iconRetinaUrl:'marker-icon-2x.png', shadowUrl:'assets/marker-shadow.png'})
    }));
    this.coordenateSelected.emit({ latitude, longitude });
  }

}
