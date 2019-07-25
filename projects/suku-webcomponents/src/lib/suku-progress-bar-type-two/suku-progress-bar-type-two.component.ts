import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-progress-bar-type-two',
	templateUrl: './suku-progress-bar-type-two.component.html',
	styleUrls: ['./suku-progress-bar-type-two.component.scss']
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

	@Input('progress-names-custom-class') progressNamesCustomClass = 'col-sm-10 offset-sm-1';
	@Input('progress-label-one') progressLabelOne = '1';
	@Input('progress-label-two') progressLabelTwo = '2';
	@Input('progress-label-three') progressLabelThree = '3';
	@Input('progress-label-four') progressLabelFour = '4';
	@Input('progress-label-five') progressLabelFive = '5';

	@Input('check-mark-custom-class') checkMarkCustomClass = 'checkmark';

	@Input('progress-text-align-custom-class') progressTextAlignCustomClass = 'text-center';

	@Input('progress-bar-label-custom-class') progressBarLabelCustomClass = 'progressTitle';
	@Input('label-content-custom-class') labelContentCustomClass = 'text-center';


	@Output() progressOneAction = new EventEmitter();
	@Output() progressTwoAction = new EventEmitter();
	@Output() progressThreeAction = new EventEmitter();
	@Output() progressFourAction = new EventEmitter();
	@Output() progressFiveAction = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
