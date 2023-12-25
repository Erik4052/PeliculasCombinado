import { Component, OnInit,  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { theaterCreationDTO } from '../../models/theater';


@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {


  }


  saveChanges(theater:theaterCreationDTO){
    console.log(theater);
  }


}
