import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-progress-bar-type-one',
	templateUrl: './suku-progress-bar-type-one.component.html',
	styleUrls: ['./suku-progress-bar-type-one.component.scss']
})
export class SukuProgressBarTypeOneComponent implements OnInit {

	@Input('progress-style-one') progressStyleOne = 'progressActive';
	@Input('progress-style-two') progressStyleTwo = 'progressUpcoming';
	@Input('progress-style-three') progressStyleThree = 'progressUpcoming';
	@Input('progress-style-four') progressStyleFour = 'progressUpcoming';
	@Input('custom-heading-one-class') customHeadingOneClass = 'p-xs-0 ';
	@Input('custom-heading-two-class') customHeadingTwoClass = '  p-xs-0';
	@Input('custom-heading-three-class') customHeadingThreeClass = 'p-xs-0';
	@Input('custom-heading-four-class') customHeadingFourClass = 'p-xs-0';
	@Input('enable-pointer') enablePointer = false;

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
	@Output() progressOneAction = new EventEmitter();
	@Output() progressTwoAction = new EventEmitter();
	@Output() progressThreeAction = new EventEmitter();
	@Output() progressFourAction = new EventEmitter();
	constructor() { }

	ngOnInit() { }
}
