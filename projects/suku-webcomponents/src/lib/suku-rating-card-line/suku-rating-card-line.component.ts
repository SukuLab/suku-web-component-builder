import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'suku-rating-card-line',
	templateUrl: './suku-rating-card-line.component.html',
	styleUrls: ['./suku-rating-card-line.component.scss']
})
export class SukuRatingCardLineComponent implements OnInit {
	fullStars = 0;
	fullStarsArray = [];
	halfStar = 0;
	emptyStars = 0;
	emptyStarsArray = [];
	_ratingValue;
	@Input()
	image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
	@Input('icon-one') iconOne = '';
	@Input('icon-two') iconTwo = '';
	@Input('msg-status') msgStatus;
	@Input('customclass') customclass = '';
	@Input('customImgclass') customImgclass = 'img-res';
	@Input('custom-iconclass') customIconclass = 'text-center';
	@Input() bgColor = '';
	@Input() interest;
	@Input() imageColSize = 'col-sm-1 p-0';
	@Input() txtcolsize = 'col-sm-3 col-xs-12 pl-lg-2 pr-2 pt-1 mt-1';
	@Input() txttwocolsize = 'col-sm-3 pt-2 mt-1';
	@Input() txtthreecolsize = 'col-sm-2 pt-2 mt-1';
	@Input('title-one') titleOne = 'Title One';
	@Input('title-one-color') titleOneColor = 'black';
	@Input('title-one-weight') titleOneWeight = '600';
	@Input('title-one-size') titleOneSize = '14';
	@Input('title-one-customclass') titleOnecustomclass = '';
	@Input('rating-title') ratingTitle = 'RATING RECEIVED';
	@Input('rating-title-color') ratingtitleColor = '#b6b6b6';
	@Input('rating-title-weight') ratingtitleWeight = '500';
	@Input('rating-title-size') ratingtitleSize = '12';
	@Input('rating-title-customclass') ratingtitlecustomclass = '';
	@Input('content-one') contentOne = 'N/A';
	@Input('content-one-color') contentOneColor = '#3e3e3e';
	@Input('content-one-weight') contentOneWeight = '500';
	@Input('content-one-size') contentOneSize = '14';
	@Input('content-one-customclass') contentOnecustomclass = '';
	@Input('content-two') contentTwo = 'N/A';
	@Input('content-two-color') contentTwoColor = '#3e3e3e';
	@Input('content-two-weight') contentTwoWeight = '500';
	@Input('content-two-size') contentTwoSize = '14';
	@Input('content-two-customclass') contentTwocustomclass = '';
	@Input('sub-title-two') subTitleTwo = 'SOLD BY';
	@Input('sub-title-two-color') subTitleTwoColor = '#b6b6b6';
	@Input('sub-title-two-weight') subTitleTwoWeight = '500';
	@Input('sub-title-two-size') subTitleTwoSize = '12';
	@Input('sub-title-two-customclass') subTitleTwocustomclass = '';
	@Input('sub-title-three') subTitleThree = 'TOTAL PRICE';
	@Input('sub-title-three-color') subTitleThreecolor = '#b6b6b6';
	@Input('sub-title-three-weight') subTitleThreeWeight = '500';
	@Input('sub-title-three-size') subTitleThreeSize = '12';
	@Input('sub-title-threeclass') subTitleThreeClass = '';
	@Input('content-three') contentThree = 'N/A';
	@Input('content-three-color') contentThreeColor = '#3e3e3e';
	@Input('content-three-widget') contentThreeWeight = '500';
	@Input('content-three-size') contentThreeSize = '14';
	@Input('content-three-customclass') contentThreecustomclass = '';
	myHTML;
	_rate = 0;
	@Output() action = new EventEmitter();
	@Input() customRatingclass;
	@Input('rating-value')
	set ratingValue(ratingValue: number) {
		console.log('ra', this.ratingValue);
		this.fullStars = Math.round(ratingValue);
		this.fullStarsArray = Array(this.fullStars).fill(1);
		this.halfStar = this.fullStars < ratingValue ? 1 : 0;
		this.emptyStars = 5 - this.fullStars - this.halfStar;
		this.emptyStarsArray = Array(this.emptyStars).fill(1);
	}
	constructor() { }
	ngOnInit() { }
}
