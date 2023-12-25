import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() maxRating = 5;
  @Input() ratingSelected = 0;
  @Output() rated: EventEmitter<number> = new EventEmitter<number>();

  maxRatingArr:any = [];
  voted = false;
  previousRating:any;

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index:number) {
    if(this.previousRating !== 0){
      this.ratingSelected = this.previousRating;
    }else{
      this.ratingSelected = 0;
    }
    this.ratingSelected = index + 1;
  }

  hanldeMouseLeave() {

    if(this.voted){
      this.ratingSelected = 0;
    }

  }

  rate(index:number) {
    this.ratingSelected = index + 1;
    this.voted = true;
    this.previousRating = this.ratingSelected;
    this.rated.emit(this.ratingSelected);
  }

}
