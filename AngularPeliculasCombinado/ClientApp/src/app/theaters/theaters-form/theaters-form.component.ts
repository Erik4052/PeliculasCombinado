import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { theaterCreationDTO } from '../../models/theater';
import { Coordenate } from 'src/app/models/coordenate';

@Component({
  selector: 'app-theaters-form',
  templateUrl: './theaters-form.component.html',
  styleUrls: ['./theaters-form.component.css']
})
export class TheatersFormComponent implements OnInit {

  @Input() model!: theaterCreationDTO;
  @Output() saveChanges: EventEmitter<theaterCreationDTO> = new EventEmitter<theaterCreationDTO>;
  constructor(private fb:FormBuilder) { }

  theatersForm!:FormGroup;
  ngOnInit(): void {

    this._initTheathersForm()
    if(this.model !== undefined) {
      this.theatersForm.patchValue(this.model);
    }
  }

  _initTheathersForm() {
    this.theatersForm = this.fb.group({
      name: ['', { validators:[Validators.required]}],
      latitude: ['', { validators:[Validators.required]}],
      longitude: ['', { validators:[Validators.required]}]
    });
  }


  submitTheatersForm(){
    this.saveChanges.emit(this.theatersForm.value)
  }

  coordenateSelected(coordenateSelected : Coordenate) {
    this.theatersForm.setValue(coordenateSelected);
  }

  get name() {
    return this.theatersForm.get('name') as FormControl;
  }
}
