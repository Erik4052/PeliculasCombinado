import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalLetter } from 'src/app/utilidades/dynamic-validations/capital-letter';
import { genderCreationDTO } from '../../models/genero';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  genderForm!: FormGroup;
  @Input() model!: genderCreationDTO;
  @Output() submit:EventEmitter<genderCreationDTO> = new EventEmitter<genderCreationDTO>();

  ngOnInit(): void {
    this.genderForm = this.fb.group({
      name: ['', {validators: [Validators.required, Validators.minLength(4), capitalLetter()]}]
    });

    if(this.model !== undefined){
      this.genderForm.patchValue(this.model)
     }
  }


  getErrorFieldName() {
    const field = this.genderForm.get('name');
    if(field?.hasError('required')){
      return 'Field Name is Required'
    }

    if(field?.hasError('minlength')){
      return 'Min length is 4 caracters'
    }

    if(field?.hasError('capitalLetter')){
      return field.getError('capitalLetter')?.message;
    }

    return ''
  }

  saveChanges() {
    this.submit.emit(this.genderForm.value)
  }


}
