import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-header',
	templateUrl: './suku-header.component.html',
	styleUrls: [ './suku-header.component.scss' ]
})
export class SukuHeaderComponent implements OnInit {
	_date;
	_enableTimer;
	@Input() titleOne = 'LISTING NAME';
	@Input() titleOneId;
	@Input() titleOneSize;
	@Input() titleOneColor;
	@Input() titleOneWeight;
	@Input() titleOneCustomClass;

	@Input() contentOne = 'N/A';
	@Input() contentOneId;
	@Input() contentOneSize;
	@Input() contentOneColor;
	@Input() contentOneWeight;
	@Input() contentOneCustomClass;

	@Input() titleTwo = 'SELLER NAME';
	@Input() titleTwoId;
	@Input() titleTwoSize;
	@Input() titleTwoColor;
	@Input() titleTwoWeight;
	@Input() titleTwoCustomClass;

	@Input() contentTwo = 'N/A';
	@Input() contentTwoId;
	@Input() contentTwoSize;
	@Input() contentTwoColor;
	@Input() contentTwoWeight;
	@Input() contentTwoCustomClass="c-pointer";

	@Input() titleThree = 'TIME REMAINING';
	@Input() titleThreeId;
	@Input() titleThreeSize;
	@Input() titleThreeColor;
	@Input() titleThreeWeight;
	@Input() titleThreeCustomClass;

	@Input()
	get contentThree() {
		return this._date;
	}
	set contentThree(val) {
		this._date = val;
	}
	@Input()
	get enableTimer() {
		return this._enableTimer;
	}
	set enableTimer(val) {
		this._enableTimer = val;
	}
	@Input() contentThreeId;
	@Input() contentThreeSize;
	@Input() contentThreeColor;
	@Input() contentThreeWeight;
	@Input() contentThreeCustomClass;

	@Output() action = new EventEmitter();
	constructor() {}

	ngOnInit() {
		this.contentThree = 'N/A';
	}
}