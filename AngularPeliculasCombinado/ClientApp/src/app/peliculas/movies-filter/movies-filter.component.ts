import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  form!:FormGroup
  genders = [
  {id:1, name: 'Drama'},
  {id:2, name:'Comedy'},
  {id:3, name:'Action'}]

  constructor(
    private fb: FormBuilder,
    private location:Location,
    private router: ActivatedRoute) { }

  movies = [
    {
    title:'Spiderman Far From Home',
    inTheaters:false,
    upcomingFilms:true,
    genders:[3],
    poster:'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-176834859-large.jpg'
    },
    {
      title:'No way Home',
      inTheaters:true,
      upcomingFilms:true,
      genders:[2,3],
      poster:'https://caracoltv.brightspotcdn.com/dims4/default/8094955/2147483647/strip/false/crop/1080x1350+0+0/resize/1200x1500!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F7c%2F92%2F9e25d50d45fdb395f621fcf44185%2Fspiderman.jpg'
    },
    {
      title:'The Whale',
      inTheaters:false,
      upcomingFilms:true,
      genders:[1],
      poster:'https://moviepostermexico.com/cdn/shop/products/sub-buzz-804-1670562473-53_2025x.jpg?v=1678981090'
    }

  ]

 /*  originalMovies = [
    {
      title:'Spiderman Far From Home',
      inTheaters:false,
      upcomingFilms:true,
      genders:[3],
      poster:'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-176834859-large.jpg'
      },
      {
        title:'No way Home',
        inTheaters:true,
        upcomingFilms:false,
        genders:[2,3],
        poster:'https://caracoltv.brightspotcdn.com/dims4/default/8094955/2147483647/strip/false/crop/1080x1350+0+0/resize/1200x1500!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F7c%2F92%2F9e25d50d45fdb395f621fcf44185%2Fspiderman.jpg'
      },
      {
        title:'The Whale',
        inTheaters:false,
        upcomingFilms:true,
        genders:[1],
        poster:'https://moviepostermexico.com/cdn/shop/products/sub-buzz-804-1670562473-53_2025x.jpg?v=1678981090'
      }
  ] */
  originalMovies = this.movies;
  originalMoviesForm = {
    title: '',
    genderId: 0,
    upcomingFilms: false,
    inTheaters: false
  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.initMoviesForm();
    this.subscribeToFormChanges();
  }

  clean() {
    this.form.patchValue(this.originalMoviesForm);
  }

  subscribeToFormChanges(){
    this.form.valueChanges.subscribe(values => {
      this.movies = this.originalMovies
      this.searchMovies(values);
      this._typeSearchParamsOnURL();
    });
  }

  initMoviesForm() {
    this.form = this.fb.group(this.originalMoviesForm);
    this._readValuesInURL();
    this.searchMovies(this.form.value);
  }

  searchMovies(values:any) {
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title)!== -1);
    }
    if(values.genderId !== 0 ){
      this.movies = this.movies.filter(movie => movie.genders.indexOf(values.genderId)!== -1);
    }
    if(values.upcomingFilms) {
      this.movies = this.movies.filter(movie => movie.upcomingFilms);
    }
    if(values.inTheaters) {
      this.movies = this.movies.filter(movie => movie.inTheaters);
    }
  }

  private _typeSearchParamsOnURL(){
    const queryStrings = [];
    const formValues = this.form.value;

    if(formValues.title) {
      queryStrings.push(`title=${formValues.title}`);
    }

    if(formValues.genderId != '0') {
      queryStrings.push(`genderId=${formValues.genderId}`);
    }

    if(formValues.upcomingFilms != '0'){
      queryStrings.push(`upcomingFilms=${formValues.upcomingFilms}`)
    }

    if(formValues.inTheaters){
      queryStrings.push(`inTheaters=${formValues.inTheaters}`);
    }
    this.location.replaceState('movies/search', queryStrings.join('&'))
  }

  private _readValuesInURL(){
    this.router.queryParams.subscribe((params) => {
      console.log(params.genderId);

      const movieObject:any = {};
      if(params.title){
        movieObject.title = params.title;
      }
      if(params.genderId){
        movieObject.genderId = Number(params.genderId);
      }
      if(params.inTheaters){
        movieObject.inTheaters = params.inTheaters;
      }
      if(params.upcomingFilms){
        movieObject.upcomingFilms = params.upcomingFilms;
      }
      console.log(movieObject);

      this.form.patchValue(movieObject);
      console.log(this.form);

    });
  }

}
