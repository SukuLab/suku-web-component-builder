import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-funding-source',
	templateUrl: './suku-funding-source.component.html',
	styleUrls: [ './suku-funding-source.component.scss' ]
})
export class SukuFundingSourceComponent implements OnInit {
	@Input() fundingDetails = [];
	@Input() iconClass = 'icon';
	@Input()
	fundingSourceLabel = {
		labelOne: 'Funding Sources',
		labelOneId: 'fundingSources',
		labelTwo: 'Default Funding Sources:',
		labelTwoId: 'defaultFundingSources:',
		labelThree: 'Current Funding Sources',
		labelThreeId: 'currentFundingSources',
		labelFour: 'No Funding Source Added!',
		labelFourId: 'noFundingSourceAdded!',
		labelFive: 'Default',
		labelFiveId: 'Default'
	};
	@Input()
	fundingSourceWidgetLabel = {
		labelOne: 'ACH Wallet',
		labelOneId: 'ACHWallet',
		labelTwo: 'Balance:',
		labelTwoId: 'Balance:'
	};
	@Input()
	fundingSourceWidgetButtonLabel = {
		labelOne: 'Remove',
		labelOneId: 'Remove',
		labelTwo: 'Make Default:',
		labelTwoId: 'Make Default:',
		labelThree: 'Transfer Balance',
		labelThreeId: 'Make Default:'
	};
	@Input() contentOne = '';

	@Input() labelOneId;
	@Input() labelOneSize;
	@Input() labelOneColor;
	@Input() labelOneWeight;
	@Input() labelOneCustomClass;

	/* output--actions */
	@Output() removeDefault = new EventEmitter();
	@Output() makeDefaultAction = new EventEmitter();
	@Output() removeSourceAction = new EventEmitter();
	@Output() transferFundAction = new EventEmitter();
	@Output() addSource = new EventEmitter();

	constructor() {}
	ngOnInit() {}
}
