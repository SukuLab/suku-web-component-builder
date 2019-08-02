import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-progress-bar-type-two',
	templateUrl: './suku-progress-bar-type-two.component.html',
	styleUrls: ['./suku-progress-bar-type-two.component.scss']
})
export class SukuProgressBarTypeTwoComponent implements OnInit {
	@Input('progress-style-one') progressStyleOne = 'progressActive';
	@Input('progress-style-two') progressStyleTwo = 'progressUpcoming';
	@Input('progress-style-three') progressStyleThree = 'progressUpcoming';
	@Input('progress-style-four') progressStyleFour = 'progressUpcoming';
	@Input('progress-style-five') progressStyleFive = 'progressUpcoming';
	@Input('custom-heading-one-class') customHeadingOneClass = '';
	@Input('custom-heading-two-class') customHeadingTwoClass = '';
	@Input('custom-heading-three-class') customHeadingThreeClass = '';
	@Input('custom-heading-four-class') customHeadingFourClass = '';
	@Input('custom-heading-five-class') customHeadingFiveClass = '';
	@Input('enable-pointer') enablePointer = false;

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
	@Output() progressOneAction = new EventEmitter();
	@Output() progressTwoAction = new EventEmitter();
	@Output() progressThreeAction = new EventEmitter();
	@Output() progressFourAction = new EventEmitter();
	@Output() progressFiveAction = new EventEmitter();
	constructor() { }

	ngOnInit() { }
}
