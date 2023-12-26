import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent implements OnInit {
saveChanges() {
throw new Error('Method not implemented.');
}

  constructor(private fb:FormBuilder) { }
  moviesForm!: FormGroup;

  ngOnInit(): void {
    this.initMoviesForm();
  }
  private initMoviesForm() {

    this.moviesForm = this.fb.group({
      title: ['', [Validators.required]],
      summary: ['', [],],
      inTheaters: [false,[]],
      trailer: ['', []],
      releaseDate: ['',[]],
      poster: ['',[]]
    });
  }

}
