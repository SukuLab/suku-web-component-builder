import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-profile-header',
	templateUrl: './suku-profile-header.component.html',
	styleUrls: [ './suku-profile-header.component.scss' ]
})
export class SukuProfileHeaderComponent implements OnInit {
	/* profile--widget --start */
	fullStars = 0;
	fullStarsArray = [];
	halfStar = 0;
	emptyStars = 0;
	emptyStarsArray = [];
	_ratingValue;
	@Input() profileImage = '../../assets/images/browser.png';
	@Input('user-name') userName = 'Suku';
	@Input() nameWeight = '400';
	@Input() nameCustomClass = 'text-white mb-4 res-color pl-2 text-capitalize';
	@Input() nameSize = '33.4';
	@Input() nameColor;
	@Input() userNameId;
	@Input('account-type') accountType = 'Manufacturer';
	@Input() accountWeight = '400';
	@Input() accountCustomClass = 'pl-2 res-color';
	@Input() accountSize = '17';
	@Input() accountColor = 'rgba(255, 255, 255, 0.67)';
	@Input() accountId = 'accountId';
	@Input() ratingCustomClass = 'pl-2 mb-2 pt-3';
	@Input() rateDetails = '';
	@Input() rateDetailColor = '#757575';
	@Input() ratingDetailWeight = '400';
	@Input() rateDetailSize = '14';
	@Input() rateDetailsCustomClass = 'pl-2 mt-1';
	@Input() ratingPrivacy: Boolean;
	@Input() rateDetailsId = '';
	@Output() actionOne = new EventEmitter();
	@Output() actionTwo = new EventEmitter();
	@Output() rating = new EventEmitter();
	@Input() customClass;
	@Input()
	@Input('rating-value')
	set ratingValue(val: number) {
		this.fullStars = Math.round(val);
		this.fullStarsArray = Array(this.fullStars).fill(1);
		this.halfStar = this.fullStars < val ? 1 : 0;
		this.emptyStars = 5 - this.fullStars - this.halfStar;
		this.emptyStarsArray = Array(this.emptyStars).fill(1);
	}

	/* edit-password--visibility */
	@Input() subHeadingOne = 'edit account';
	@Input() subHeadingOneId = 'editAccount';
	@Input() subHeadingTwo = 'change password';
	@Input() subHeadingTwoId = 'changePassword';
	@Input() editvisibility = true;
	@Input() changePasswordvisibility = true;

	/* suku-mail-widget */
	@Input() mail = 'dconway@suku.com';
	@Input() mailTxtSize = '13';
	@Input() mailTextColor = '#3e3e3e';
	@Input() mailWeight = '500';
	@Input() mailcustomClass = 'pt-2 pl-4 d-flex align-items-center';
	@Input() mailId = 'mail';
	@Input() mailIcon = '';
	@Input() mailIconClass = '';
	@Input('icon-one-id') iconOneId = 'mail';
	@Input('icon-one') iconOne = 'suku-mail-icon';
	@Input('icon-one-custom-class') iconOneCustomClass = 'mt-2';

	/* suku-phone-widget */
	@Input() number = 'N/A';
	@Input() phnumberSize = '13';
	@Input() phnumberColor = '#3e3e3e';
	@Input() phnumberWeight = '500';
	@Input() phnumberCustomClass = 'pl-4 mt-1 mb-1  d-flex align-items-center';
	@Input() phNumberIcon = '';
	@Input() phoneId = '';
	@Input('icon-two-id') iconTwoId = 'phone';
	@Input('icon-two') iconTwo = 'suku-phone-icon';
	@Input('icon-two-custom-class') iconTwoCustomClass = 'mt-2';

	/* suku-address-widget */
	@Input() addressIcon = '';
	@Input() address = '9315 NW 112TH AVE';
	@Input() addressSize = '13';
	@Input() addressColor = '#3e3e3e';
	@Input() addressWeight = '500';
	@Input() addressId = '';
	@Input() addressCustomClass = 'pt-2 pl-4 d-flex align-items-center';
	@Input('icon-three-id') iconThreeId = 'address';
	@Input('icon-three') iconThree = 'suku-map-pin-icon';
	@Input('icon-three-custom-class') iconThreeCustomClass = 'mt-2';

	/* sam-bardge */
	@Input() samBadgeIcon = '';
	@Input() samBadgeClass = '';
	@Output() samIconAction = new EventEmitter();
	@Input('icon-four-id') iconFourId = 'address';
	@Input('icon-four') iconFour = 'suku-sam-badge-icon';
	@Input('icon-four-custom-class') iconFourCustomClass = 'mt-1 suku-lg';
	

	constructor() {}

	ngOnInit() {}

	editAccount() {
		this.actionOne.emit();
	}

	changePass() {
		this.actionTwo.emit();
	}
}
