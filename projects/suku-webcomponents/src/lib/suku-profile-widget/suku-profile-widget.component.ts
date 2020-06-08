import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'suku-profile-widget',
  templateUrl: './suku-profile-widget.component.html',
  styleUrls: ['./suku-profile-widget.component.scss']
})
export class SukuProfileWidgetComponent implements OnInit {
  @Input() image = '../../assets/images/browser.png';
  @Input('user-name') userName = 'Vairog';
  @Input('name-weight') nameWeight = '400';
  @Input('name-custom-class') nameCustomClass = 'mb-0 mt-1 pl-1';
  @Input('name-size') nameSize = '';
  @Input('name-color') nameColor;
  @Input('account-type') accountType = 'Manufacturer';
  @Input('account-weight') accountWeight = '400';
  @Input('account-custom-class') accountCustomClass = 'pl-2';
  @Input('account-size') accountSize = '';
  @Input('account-color') accountColor = '';
  @Input('rating-custom-class') ratingCustomClass = 'pl-2 mb-2 pt-3 mt-4';
  @Input('rate-details') rateDetails = 'based on 14 rating';
  @Input('rate-color') rateColor = '';
  @Input('rating-weight') ratingWeight = '400';
  @Input('r-dustom-class') rDustomClass = 'pl-2';
  @Input() id = '';
  @Input('sub-custom-class') subCustomClass = 'profileBox';
  @Input('main-custom-class') mainCustomClass = 'col-sm-12 col-md-6 col-lg-3 ml-2 mt-1 p-0';
  myHTML;
  _rate = 5;
  @Output() rating = new EventEmitter();
  @Input() customClass;
  fullStars = 0;
  fullStarsArray = [];
  halfStar = 0;
  emptyStars = 0;
  emptyStarsArray = [];
  @Output() action = new EventEmitter();
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
  constructor() {
  }

  ngOnInit() {
  }

}
