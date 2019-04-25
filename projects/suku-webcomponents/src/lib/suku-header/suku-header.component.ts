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
	@Input() contentOne = 'N/A';
	@Input() titleTwo = 'SELLER NAME';
	@Input() contentTwo = 'N/A';
	@Input() titleThree = 'TIME REMAINING';
	@Input()
	get contentThree() {
		return this._date;
	}
	set contentThree(val) {
		console.log(val);
		this._date = val;
	}
	@Input()
	get enableTimer() {
		return this._enableTimer;
	}
	set enableTimer(val) {
		console.log(val);
		this._enableTimer = val;
	}
	@Output() action = new EventEmitter();
	constructor() {}

	ngOnInit() {
	}

}
