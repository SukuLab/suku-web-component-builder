import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'suku-progress-bar-type-two',
	templateUrl: './suku-progress-bar-type-two.component.html',
	styleUrls: [ './suku-progress-bar-type-two.component.scss' ]
})
export class SukuProgressBarTypeTwoComponent implements OnInit {
	@Input() progressStyleOne = 'progressActive';
	@Input() progressStyleTwo = 'progressUpcoming';
	@Input() progressStyleThree = 'progressUpcoming';
	@Input() progressStyleFour = 'progressUpcoming';
	@Input() progressStyleFive = 'progressUpcoming';
	@Input() customHeadingOneClass = '';
	@Input() customHeadingTwoClass = '';
	@Input() customHeadingThreeClass = '';
	@Input() customHeadingFourClass = '';
	@Input() customHeadingFiveClass = '';
	@Input()
	progressBarLabels = {
		labelOne: 'LISTING DETAILS',
		labelTwo: 'PRODUCT DETAILS',
		labelThree: 'PRODUCT TRACEABILITY',
		labelFour: 'TERMS OF SALE',
		labelFive: 'CONFIRM'
	};
	@Input()
	progressBarIconId = {
		IconOneId: 'listingDetails',
		IconTwoId: 'productDetails',
		IconThreeId: 'productTraceability',
		IconFourId: 'termsOfSale',
		IconFiveId: 'confirm'
	};
	@Input()
	progressBarTitleId = {
		labelOneId: 'listingDetails',
		labelTwoId: 'productDetails',
		labelThreeId: 'productTraceability',
		labelFourId: 'termsOfSale',
		labelFiveId: 'confirm'
	};
	constructor() {}

	ngOnInit() {}
}
