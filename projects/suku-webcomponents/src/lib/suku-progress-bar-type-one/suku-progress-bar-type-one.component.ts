import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'suku-progress-bar-type-one',
	templateUrl: './suku-progress-bar-type-one.component.html',
	styleUrls: [ './suku-progress-bar-type-one.component.scss' ]
})
export class SukuProgressBarTypeOneComponent implements OnInit {
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
		labelOne: 'RETRIEVE COMPANY DATA',
		labelTwo: 'COMPANY INFO',
		labelThree: 'LICENSING',
		labelFour: 'CONFIRMATION'
	};
	@Input()
	progressBarIconId = {
		IconOneId: 'listingDetails',
		IconTwoId: 'productDetails',
		IconThreeId: 'productTraceability',
		IconFourId: 'confirm'
	};
	@Input()
	progressBarTitleId = {
		labelOneId: 'listingDetails',
		labelTwoId: 'productDetails',
		labelThreeId: 'productTraceability',
		labelFourId: 'confirm'
	};
	constructor() {}

	ngOnInit() {}
}
