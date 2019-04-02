import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
	selector: 'suku-ach-setting',
	templateUrl: './suku-achsettings.component.html',
	styleUrls: [ './suku-achsettings.component.scss' ]
})
export class SukuACHSettingsComponent implements OnInit, AfterViewInit {
	_beneficialOwnerStatus;
	@Input() title = ' Payment Portal';
	@Input() titleId = ' paymentPortal';
	@Input() subTitle = ' ACH Settings';
	@Input() subTitleId = ' ACHSettings';
	@Input() subContent = 'unverified';
	@Input() subContentId = ' unverified';
	@Input() SetupACHPaymentsBtnText = 'Setup ACH Payments';
	@Input() paymentButtonId = 'SetupACHPayments';
	@Input() lowerText = 'please setup your ACH payment profile below';
	@Input() upperText = 'ACH Payment Profile Not Complete';
	@Input() upperTextId = 'upperTextId';
	@Input() lowerTextId = 'lowerTextId';
	@Input() subtitleId = 'subtitleId';
	@Output() action = new EventEmitter();
	@Output() upload = new EventEmitter();
	@Input()
	get beneficialOwnerStatus() {
		return this._beneficialOwnerStatus;
	}
	set beneficialOwnerStatus(val) {
		console.log(val);
		this._beneficialOwnerStatus = val;
	}
	@Input() documentStatus;
	selected = [];
	toggle = [];
	customClass;
	constructor() {}

	ngOnInit() {
		console.log('this.documentStatus', this.documentStatus);
		if (this.documentStatus) {
			for (let j = 0; j < this.documentStatus.length; j++) {
				this.toggle[j] = false;
			}
			this.toggle[0] = true;
		}
	}

	ngAfterViewInit() {
		this.selected[0] = null;
	}

	uploadDoc(val) {
		console.log('val', val);
		this.upload.emit(val);
	}

	active(i) {
		this.selected[i] = i;
		this.toggle[i] = !this.toggle[i];
		if (this.documentStatus) {
			for (let j = 0; j < this.documentStatus.length; j++) {
				if (i != j) {
					this.selected[j] = null;
				}
			}
		}
		if (!this.toggle[i]) {
			this.selected[i] = null;
		} else {
			if (this.documentStatus) {
				for (let j = 0; j < this.documentStatus.length; j++) {
					if (i != j) {
						this.toggle[j] = false;
					}
				}
			}
		}
	}
}