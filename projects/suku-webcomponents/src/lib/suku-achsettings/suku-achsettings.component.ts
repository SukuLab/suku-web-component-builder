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
	styleUrls: ['./suku-achsettings.component.scss'],
})
export class SukuACHSettingsComponent implements OnInit, AfterViewInit {
	_beneficialOwnerStatus;
	@Input() title = 'Payment Portal';
	@Input() titleId = 'paymentPortal';
	@Input() titleCustomClass = '';
	@Input() subTitle = 'ACH Settings';
	@Input() subTitleId = 'ACHSettings';
	@Input() subTitleCustomClass = '';

	@Input() labelOne = 'Payment profile status:';
	@Input() labelOneCustomClass = '';
	@Input() labelOneId = '';

	@Input() labelTwo = 'Beneficial Owner';
	@Input() labelTwoCustomClass = '';
	@Input() labelTwoId = 'Beneficial Owner';

	@Input() labelThree = 'Status:';
	@Input() labelThreeCustomClass = '';
	@Input() labelThreeId = 'Beneficial Owner';

	@Input() labelFour = ' Documentation Upload Needed';
	@Input() labelFourCustomClass = '';
	@Input() labelFourCustomClassId = 'Documentation Upload';

	@Input() labelFive = 'Note: Document verification may take 2-3 business days to get verified.';
	@Input() labelFiveCustomClass = '';
	@Input() labelFiveId = '';

	@Input() labelSix = 'Please setup your ACH payment profile below';
	@Input() labelSixCustomClass = '';
	@Input() labelSixId = '';

	@Input() labelSeven = 'Document Status:';
	@Input() labelSevenCustomClass = '';
	@Input() labelSevenId = '';

	@Input() labelEight = 'Upload Document';
	@Input() labelEightCustomClass = '';
	@Input() labelEightId = 'upload';

	@Input() labelNine = 'Beneficial Owners:';
	@Input() labelNineCustomClass = '';
	@Input() labelNineId = 'upload';

	@Input() subContentCustomClass = '';
	@Input() subContentId = 'unverified';
	@Input() subContent = 'unverified';

	@Input() buttonLabel = 'Setup ACH Payments';
	@Input() buttonLabelId = 'setupACHPayments';

	@Input() paymentButtonId = 'SetupACHPayments';

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
			this.labelSix = 'Please upload beneficial owner documents below';
		}
	}
	@Input() documentStatus;
	selected = [];
	toggle = [];
	customClass;
	constructor() { }

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
			case 'passport':
				return 'Passport';
			case 'license':
				return `Driver's License`;
			default:
				return docType;
		}
	}

	getDocFailureString(failureType): string {
		switch (failureType) {
			case 'ScanNotReadable':
				return 'Scan Not Readable';
			case 'ScanNotUploaded':
				return 'Scan Not Uploaded';
			case 'ScanIdTypeNotSupported':
				return 'ID Type Not Supported';
			case 'ScanNameMismatch':
				return 'Name Mismatch';
			default:
				return failureType;
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
