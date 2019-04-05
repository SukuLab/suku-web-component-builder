import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
	selector: 'suku-rating-star',
	templateUrl: './suku-rating-star.component.html',
	styleUrls: [ './suku-rating-star.component.scss' ]
})
export class SukuRatingStarComponent implements OnInit {
	myHTML;
  _rate = 0;
  fullStars = 0;
  fullStarsArray = [];
  halfStar = 0;
  emptyStars = 0;
  emptyStarsArray = [];
	@Output() action = new EventEmitter();
	@Input() customclass;
  @Input('rating-value')
  // Calculate the number of full, half, and empty stars based on the ratingValue
  // Arrays are created to iterate through with an ngFor in the HTML file
	set ratingValue(ratingValue: number) {
    this.fullStars = Math.round(ratingValue);
    this.fullStarsArray = Array(this.fullStars).fill(1);
    this.halfStar = (this.fullStars < ratingValue) ? 1 : 0;
    this.emptyStars = 5 - this.fullStars - this.halfStar;
    this.emptyStarsArray = Array(this.emptyStars).fill(1);
  }

	constructor() {}

  ngOnInit() {}

}
