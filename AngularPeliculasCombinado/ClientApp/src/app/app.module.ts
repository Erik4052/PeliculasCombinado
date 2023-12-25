import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown'
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGendersComponent } from './generos/index-genders/index-genders.component';
import { CreateGenderComponent } from './generos/create-gender/create-gender.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateMoviesComponent } from './peliculas/create-movies/create-movies.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { IndexTheaterComponent } from './theaters/index-theater/index-theater.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGendersComponent } from './generos/edit-genders/edit-genders.component';
import { EditMoviesComponent } from './peliculas/edit-movies/edit-movies.component';
import { EditTheatersComponent } from './theaters/edit-theaters/edit-theaters.component';
import { GenderFormComponent } from './generos/gender-form/gender-form.component';
import { MoviesFilterComponent } from './peliculas/movies-filter/movies-filter.component';
import { ActorsFormComponent } from './actors/actors-form/actors-form.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { TheatersFormComponent } from './theaters/theaters-form/theaters-form.component';
import { MapComponent } from './utilidades/map/map.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},

  {path: 'genders', component: IndexGendersComponent},
  {path: 'genders/create', component:CreateGenderComponent},
  {path: 'genders/edit/:id', component:EditGendersComponent},

  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component:CreateActorComponent},
  {path: 'actors/edit/:id', component:EditActorComponent},

  {path: 'theaters', component: IndexTheaterComponent},
  {path: 'theaters/create', component:CreateTheaterComponent},
  {path: 'theaters/edit/:id', component:EditTheatersComponent},

  {path: 'movies/create', component:CreateMoviesComponent},
  {path: 'movies/edit/:id', component:EditMoviesComponent},

  {path: 'movies/search', component:MoviesFilterComponent},

  {path: '**', redirectTo: ''}


]
@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndexGendersComponent,
    CreateGenderComponent,
    IndexActorsComponent,
    CreateActorComponent,
    CreateMoviesComponent,
    CreateTheaterComponent,
    IndexTheaterComponent,
    EditActorComponent,
    EditGendersComponent,
    EditMoviesComponent,
    EditTheatersComponent,
    GenderFormComponent,
    MoviesFilterComponent,
    ActorsFormComponent,
    InputImgComponent,
    InputMarkdownComponent,
    TheatersFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LeafletModule,
    MarkdownModule.forRoot(),
     RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
