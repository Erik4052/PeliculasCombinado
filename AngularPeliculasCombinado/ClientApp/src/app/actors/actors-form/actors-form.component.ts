import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO, actorDTO } from '../../models/actor';


@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.css']
})
export class ActorsFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  actorsForm!: FormGroup;
  @Input() model!:actorDTO;
  @Output() submitActorsForm: EventEmitter<actorCreationDTO> = new EventEmitter<actorCreationDTO>()
  ngOnInit(): void {
    this.initActorsForm();
  }

  initActorsForm() {
    this.actorsForm = this.fb.group({
      name:['', [Validators.required]],
      date:['', ],
      image: [''],
      biography:['']
    });
    if(this.model !== undefined){
      this.actorsForm.patchValue(this.model);
    }
  }

  onSubmit(){
    this.submitActorsForm.emit(this.actorsForm.value);
  }

  fileSelected(file:any){
    this.image.setValue(file);
  }

  markdownChange(text:string) {
    this.biography.setValue(text);
  }

  get image() {
    return this.actorsForm.get('image') as FormControl;
  }

  get biography() {
    return this.actorsForm.get('biography') as FormControl;
  }

}
