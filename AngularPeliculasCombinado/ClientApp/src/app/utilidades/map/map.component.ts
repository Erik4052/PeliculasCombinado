import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, Marker, marker } from 'leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Coordenate } from 'src/app/models/coordenate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
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
  }

  handleClick(event: LeafletMouseEvent): void {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
    this.coordenateSelected.emit({ latitude, longitude });
  }

}
