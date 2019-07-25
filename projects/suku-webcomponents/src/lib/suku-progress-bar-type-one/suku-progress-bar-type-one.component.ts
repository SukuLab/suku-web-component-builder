import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-progress-bar-type-one',
	templateUrl: './suku-progress-bar-type-one.component.html',
	styleUrls: ['./suku-progress-bar-type-one.component.scss']
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
	@Input() customClass = 'col p-0 pt-4';
	@Input('progress-bar-title') progressBarTitle = 'PROGRESS';
	@Input('progress-bar-color') progressBarColor;
	@Input('progress-bar-font-size') progressBarFontSize;
	@Input('progress-bar-font-wight') progressBarFontWight;

	@Input('progress-bar-label-one') progressBarLabelOne = '1';
	@Input('progress-bar-label-two') progressBarLabelTwo = '2';
	@Input('progress-bar-label-Three') progressBarLabelThree = '3';
	@Input('progress-bar-label-four') progressBarLabelFour = '4';

	@Input('label-title-custom-class') labelTitleCustomClass = 'progressTitle';
	@Input('lable-text-custom-class') lableTextCustomClass = 'text-center';
	@Input('label-grid-custom-class') labelGridCustomClass = 'col-sm-10 offset-sm-1';

	@Input('progress-bar-name-grid-align') progressBarNameGridAlign = 'col-sm-12';

	@Input('progress-bar-title-class') progressBarTitleClass = 'col-sm-2 pr-0 mnt-0';

	@Input('check-mark-custom-class') checkMarkCustomClass = 'checkmark';

	@Output() progressOneAction = new EventEmitter();
	@Output() progressTwoAction = new EventEmitter();
	@Output() progressThreeAction = new EventEmitter();
	@Output() progressFourAction = new EventEmitter();


	constructor() { }

	ngOnInit() { }
}
