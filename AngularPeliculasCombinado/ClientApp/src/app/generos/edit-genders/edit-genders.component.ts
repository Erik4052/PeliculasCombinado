import { Component, OnInit } from '@angular/core';
import { genderCreationDTO } from '../../models/genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-genders',
  templateUrl: './edit-genders.component.html',
  styleUrls: ['./edit-genders.component.css']
})
export class EditGendersComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  model: genderCreationDTO = {name:'Drama'}

  saveChanges(gender:genderCreationDTO) {
    console.log(gender);

    this.router.navigate(['/genders'])
    //Save Changes
  }

}
