import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'suku-progress-bar',
	templateUrl: './suku-progress-bar.component.html',
	styleUrls: [ './suku-progress-bar.component.scss' ]
})
export class SukuProgressBarComponent implements OnInit {
	@Input() progressStyleOne = 'progressCompleted';
	@Input() progressStyleTwo = 'progressUpcoming';
	@Input() progressStyleThree = 'progressUpcoming';
	@Input() progressStyleFour = 'progressUpcoming';
	@Input() progressStyleFive = 'progressUpcoming';
	@Input() headingOne = 'LISTING DETAILS';
	@Input() headingTwo = 'PRODUCT DETAILS';
	@Input() headingThree = 'PRODUCT TRACEABILITY';
	@Input() headingFour = 'TERMS OF SALE';
	@Input() headingFive = 'CONFIRM';
	@Input() headingOneId = 'firstHeading';
	@Input() headingTwoId = 'secondHeading';
	@Input() headingThreeId = 'thirdHeading';
	@Input() headingFourId = 'fourthHeading';
	@Input() headingFiveId = 'fifthHeading';
	@Input('custom-heading-one-class') customHeadingOneClass = 'text-bold';
	@Input('custom-heading-two-class') customHeadingTwoClass = '';
	@Input('custom-heading-three-class') customHeadingThreeClass = '';
	@Input('custom-heading-four-class') customHeadingFourClass = '';
	@Input('custom-heading-five-class') customHeadingFiveClass = '';
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
