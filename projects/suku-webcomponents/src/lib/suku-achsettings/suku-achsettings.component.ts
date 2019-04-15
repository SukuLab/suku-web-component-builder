import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
} from '@angular/core';

@Component({
	selector: 'suku-ach-setting',
	templateUrl: './suku-achsettings.component.html',
	styleUrls: [ './suku-achsettings.component.scss' ],
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
	@Input() lowerText = 'Please setup your ACH payment profile below';
	@Input() lowerTextId = 'lowerTextId';
	@Input() subtitleId = 'subtitleId';
	@Output() action = new EventEmitter();
	@Output() upload = new EventEmitter();
	@Input()
	get beneficialOwnerStatus() {
		return this._beneficialOwnerStatus;
	}
	set beneficialOwnerStatus(val) {
		this._beneficialOwnerStatus = val;
		if (val) {
			this.lowerText = 'Please upload beneficial owner documents below';
		}
	}
	@Input() documentStatus;
	selected = [];
	toggle = [];
	customClass;
	constructor() {}

	ngOnInit() {
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
		this.upload.emit(val);
	}

	getDocTypeString(docType): string {
		switch (docType) {
			case 'idcard':
				return 'Government Issued ID';
				break;
			case 'passport':
				return 'Passport';
				break;
			case 'license':
				return "Driver's License";
				break;
			default:
				return docType;
				break;
		}
	}

	getDocFailureString(failureType): string {
		switch (failureType) {
			case 'ScanNotReadable':
				return 'Scan Not Readable';
				break;
			case 'ScanNotUploaded':
				return 'Scan Not Uploaded';
				break;
			case 'ScanIdTypeNotSupported':
				return 'ID Type Not Supported';
				break;
			case 'ScanNameMismatch':
				return 'Name Mismatch';
				break;
			default:
				return failureType;
				break;
		}
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
