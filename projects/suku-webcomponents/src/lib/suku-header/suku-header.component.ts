import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-header',
	templateUrl: './suku-header.component.html',
	styleUrls: ['./suku-header.component.scss']
})
export class SukuHeaderComponent implements OnInit {
	_date;
	_enableTimer;
	@Input() titleOne = 'LISTING NAME';
	@Input('title-one-id') titleOneId;
	@Input('title-one-size') titleOneSize;
	@Input('title-one-color') titleOneColor;
	@Input('title-one-weight') titleOneWeight;
	@Input('title-one-custom-class') titleOneCustomClass;

	@Input() contentOne = 'N/A';
	@Input('content-one-id') contentOneId;
	@Input('content-one-size') contentOneSize;
	@Input('content-one-color') contentOneColor;
	@Input('content-one-weight') contentOneWeight;
	@Input('content-one-custom-class') contentOneCustomClass = 'c-pointer';

	@Input() titleTwo = 'SELLER NAME';
	@Input('title-two-id') titleTwoId;
	@Input('title-two-size') titleTwoSize;
	@Input('title-two-color') titleTwoColor;
	@Input('title-two-weight') titleTwoWeight;
	@Input('title-two-custom-class') titleTwoCustomClass;

	@Input() contentTwo = 'N/A';
	@Input('content-two-id') contentTwoId;
	@Input('content-two-size') contentTwoSize;
	@Input('content-two-color') contentTwoColor;
	@Input('content-two-weight') contentTwoWeight;
	@Input('content-two-custom-class') contentTwoCustomClass = 'c-pointer';

	@Input() titleThree = 'TIME REMAINING';
	@Input('title-three-id') titleThreeId;
	@Input('title-three-size') titleThreeSize;
	@Input('title-three-color') titleThreeColor;
	@Input('title-three-weight') titleThreeWeight;
	@Input('title-three-custom-class') titleThreeCustomClass;

	@Input('product-box-content-custom-class') productBoxContentCustomClass = 'product-boxContent';
	@Input('product-box-content-bg-color') productBoxContentBgColor;


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
	@Input('content-three-id') contentThreeId;
	@Input('content-three-size') contentThreeSize;
	@Input('content-three-color') contentThreeColor;
	@Input('content-three-weight') contentThreeWeight;
	@Input('content-three-custom-class') contentThreeCustomClass = 'c-pointer';

	@Output() action = new EventEmitter();
	constructor() { }

	ngOnInit() {
		this.contentThree = 'N/A';
	}
}