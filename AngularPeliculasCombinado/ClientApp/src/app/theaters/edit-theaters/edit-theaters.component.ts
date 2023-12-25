import { Component, OnInit } from '@angular/core';
import { theaterCreationDTO, theaterDTO } from '../../models/theater';

@Component({
  selector: 'app-edit-theaters',
  templateUrl: './edit-theaters.component.html',
  styleUrls: ['./edit-theaters.component.css']
})
export class EditTheatersComponent implements OnInit {
  model:theaterDTO = {name: 'Sambil'}
  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(theater:theaterCreationDTO){
    console.log(theater);
  }

}
