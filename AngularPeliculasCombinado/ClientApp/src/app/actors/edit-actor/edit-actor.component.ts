import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../../models/actor';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  model:actorDTO = {
    name:'Erik',
    date: new Date(),
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/800px-Tom_Cruise_by_Gage_Skidmore_2.jpg'}
  constructor(private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.subscribeToActivatedRoute();
  }

  subscribeToActivatedRoute(){
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(actor:actorCreationDTO){
    console.log(actor);

  }
}
