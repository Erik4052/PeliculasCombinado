import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { genderCreationDTO } from '../../models/genero';

@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css']
})
export class CreateGenderComponent {

  constructor(
    private router: Router,

    ) { }

  saveChanges(gender:genderCreationDTO) {
    console.log(gender);

    this.router.navigate(['/genders'])
    //Save Changes
  }

}
