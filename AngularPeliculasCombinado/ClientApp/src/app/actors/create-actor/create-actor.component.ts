import { Component, OnInit } from '@angular/core';
import { actorCreationDTO } from '../../models/actor';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(actor:actorCreationDTO) {
    console.log(actor);

  }

}
