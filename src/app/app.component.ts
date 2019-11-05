import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Observable, Observer } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { SukuLoaderService, SukuModalService, SukuWebcomponentsService } from 'projects/suku-webcomponents/src/public_api';
import { TranslateService } from '@ngx-translate/core';
// import { SukuModalService, SukuLoaderService } from 'suku-webcomponents';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	test: FormGroup;
	checkboxChecked = false;
	buttonData = {
		title: 'Marketplace',
		icon: 'fa fa-shopping-cart',
		path: '/userDashboard',
		disabled: false,
		id: 'Marketplace'
	};
	htmlContent = '<h1><b>Hello world<b></h1>';
	progressData = [
		{
			name: 'Finca Nueva',
			status: 'inProgress',
			type: 'farmJourney_Lbl',
			data: '',
			id: ''
		},
		{
			name: 'Sasmar',
			status: 'anotherStep',
			type: 'processorJourney_Lbl',
			data: '',
			id: ''
		},
		{
			name: 'Esmeralda',
			status: 'pending',
			type: 'logisticsJourney_Lbl',
			data: '',
			id: ''
		},
		{
			name: 'Cedicar',
			status: 'completedAndOther',
			type: 'distributorJourney_Lbl',
			data: '',
			id: ''
		}
	];
	header = [
		{ id: 'startdate', title: 'startDate_TblColHdr' },
		{ id: 'enddate', title: 'endDate_TblColHdr' },
		{ id: 'lname', title: 'lotID_TbldColHdr' },
		{ id: 'myStatus', title: 'myTaskStatus_TblColHdr' },
		{ id: 'actualStepsCompleted', title: 'myProductsProduced_TblColHdr' },
		{ id: 'stepsCompleted', title: 'productsProduced_TblColHdr' },
		{ id: 'Status', title: 'animalProcessing_TblColHdr' }
	];



	messageData = [
		{
			'message': 'hi',
			'id': '5cd13afcd705200019ef3cf5',
			'userId': 474,
			'userType': 'buy',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 473,
			'fromUserName': 'Camila',
			'fromUserType': 'sell',
			'dateTime': '5/7/2019, 1:29:56 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'buyyer',
				'fromUserNameHere': 'CAMILA',
				'reviewNumber': 1138,
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		},
		{
			'message': 'how are you, Waiting for bid confirmation and thanks.',
			'_id': '5cd13affd705200019ef3cf6',
			'userId': 474,
			'userType': 'buy',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 473,
			'fromUserName': 'Camila',
			'fromUserType': 'sell',
			'dateTime': '5/7/2019, 1:29:59 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'buyyer',
				'fromUserNameHere': 'CAMILA',
				'reviewNumber': 1138,
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		},
		{
			'message': 'Hi, I am fine thanks :)',
			'_id': '5cd13b224128930019a0fb79',
			'userId': 473,
			'userType': 'seller',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 474,
			'fromUserName': 'Abigail',
			'fromUserType': 'buy',
			'dateTime': '5/7/2019, 1:30:34 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'seller',
				'fromUserNameHere': 'ABIGAIL',
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		},
		{
			'message': 'Hi thanks for your message, Waiting for bid confirmation and thanks.',
			'_id': '5cd13b424128930019a0fb7a',
			'userId': 473,
			'userType': 'seller',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 474,
			'fromUserName': 'Abigail',
			'fromUserType': 'buy',
			'dateTime': '5/7/2019, 1:31:06 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'seller',
				'fromUserNameHere': 'ABIGAIL',
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		},
		{
			'message': 'Hi thanks for your message, Waiting for bid confirmation and thanks.',
			'_id': '5cd13b424128930019a0fb7a',
			'userId': 473,
			'userType': 'seller',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 474,
			'fromUserName': 'Abigail',
			'fromUserType': 'buy',
			'dateTime': '5/7/2019, 1:31:06 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'seller',
				'fromUserNameHere': 'ABIGAIL',
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		},
		{
			'message': 'Hi, I am fine thanks :)',
			'_id': '5cd13b224128930019a0fb79',
			'userId': 474,
			'userType': 'seller',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 474,
			'fromUserName': 'Abigail',
			'fromUserType': 'buy',
			'dateTime': '5/7/2019, 1:30:34 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'seller',
				'fromUserNameHere': 'ABIGAIL',
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		},
		{
			'message': 'When you move the mouse over the text below, the tooltip text will fade in and take 1 second to go from completely invisible to visible.:)',
			'_id': '5cd13b224128930019a0fb79',
			'userId': 474,
			'userType': 'seller',
			'accountType': 'Manufacturer',
			'bidId': 1138,
			'listId': 1817,
			'interestId': '1220',
			'fromUserId': 474,
			'fromUserName': 'Abigail',
			'fromUserType': 'buy',
			'dateTime': '5/7/2019, 1:30:34 PM',
			'listInfo': {
				'data': '5cd12ede9c539b00197b996e',
				'userIs': 'seller',
				'fromUserNameHere': 'ABIGAIL',
				'listid': 1817,
				'interestId': 1220
			},
			'__v': 0
		}
	];
	fundingDetails = [
		{},
		{},
		{}
	];
	chatImg;
	fundingData = [
		{
			_links: {
				'transfer-from-balance': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				},
				'on-demand-authorization': {
					href: 'https://api-sandbox.dwolla.com/on-demand-authorizations/c17c926d-0047-e911-8117-e30af325cbc3',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'on-demand-authorization'
				},
				self: {
					href: 'https://api-sandbox.dwolla.com/funding-sources/2226fda5-2b79-45bf-9e5b-a7db0751c95d',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'funding-source'
				},
				'transfer-to-balance': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				},
				'transfer-send': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				},
				remove: {
					href: 'https://api-sandbox.dwolla.com/funding-sources/2226fda5-2b79-45bf-9e5b-a7db0751c95d',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'funding-source'
				},
				customer: {
					href: 'https://api-sandbox.dwolla.com/customers/079085f6-586c-4bfa-85a7-a1dcaaa30274',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'customer'
				},
				'transfer-receive': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				}
			},
			id: '2226fda5-2b79-45bf-9e5b-a7db0751c95d',
			status: 'verified',
			type: 'bank',
			bankAccountType: 'savings',
			name: 'Parashuram',
			created: '2019-03-15T08:57:58.196Z',
			removed: false,
			default: false,
			channels: ['ach'],
			bankName: 'SANDBOX TEST BANK',
			fingerprint: '96364ee2f5572dc50451ba589429be9d034c094ffebade9d2f8c144a97f293cd'
		},
		{
			_links: {
				'transfer-from-balance': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				},
				'on-demand-authorization': {
					href: 'https://api-sandbox.dwolla.com/on-demand-authorizations/c17c926d-0047-e911-8117-e30af325cbc3',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'on-demand-authorization'
				},
				self: {
					href: 'https://api-sandbox.dwolla.com/funding-sources/2226fda5-2b79-45bf-9e5b-a7db0751c95d',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'funding-source'
				},
				'transfer-to-balance': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				},
				'transfer-send': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				},
				remove: {
					href: 'https://api-sandbox.dwolla.com/funding-sources/2226fda5-2b79-45bf-9e5b-a7db0751c95d',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'funding-source'
				},
				customer: {
					href: 'https://api-sandbox.dwolla.com/customers/079085f6-586c-4bfa-85a7-a1dcaaa30274',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'customer'
				},
				'transfer-receive': {
					href: 'https://api-sandbox.dwolla.com/transfers',
					type: 'application/vnd.dwolla.v1.hal+json',
					'resource-type': 'transfer'
				}
			},
			id: '2226fda5-2b79-45bf-9e5b-a7db0751c95d',
			status: 'verified',
			type: 'bank',
			bankAccountType: 'savings',
			name: 'Parashuram',
			created: '2019-03-15T08:57:58.196Z',
			removed: false,
			default: false,
			channels: ['ach'],
			bankName: 'SANDBOX TEST BANK',
			fingerprint: '96364ee2f5572dc50451ba589429be9d034c094ffebade9d2f8c144a97f293cd'
		}
	];
	title = 'suku-lib';
	custom = 'default';
	base64Image;
	response = [];
	selected = '1';
	options = [
		{
			name: 'Composed of',
			id: 'ComposedOf',
			value: '0'
		},
		{
			name: 'Used In',
			id: 'UsedIn',
			value: '1'
		},
		{
			name: 'Both',
			id: 'Both',
			value: '2'
		}
	];
	relation: any;
	transactionHistory = [
		{
			id: '632a2614-3d55-e911-8117-e30af325cbc3',
			status: 'cancelled',
			amount: '80.00',
			created: '2019-04-02T11:47:26.507Z',
			completedOn: '',
			accountName: 'Bryce ',
			counterParty: '',
			type: '',
			individualAchId: 'ID7JNK7A'
		},
		{
			id: '682a2614-3d55-e911-8117-e30af325cbc3',
			status: 'pending',
			amount: '80.00',
			created: '2019-04-02T11:47:26.243Z',
			completedOn: '',
			accountName: 'Bryce 190b3d93-2d4f-4b2b-93ed-df10acdbe096',
			counterParty: 'ImpactRanching',
			type: 'outgoing'
		},
		{
			id: 'ebd133b2-3c55-e911-8117-e30af325cbc3',
			status: 'pending',
			amount: '200.00',
			created: '2019-04-02T11:44:39.750Z',
			completedOn: '',
			accountName: 'Bryce c9354fe7-dbea-45a5-8c81-730b3a0f0e56',
			counterParty: 'Smartrac',
			type: 'incoming'
		}
	];
	messageArray = [];
	beneficialOwnerStatus = [
		{
			firstName: 'Jaison',
			verificationStatus: 'document',
			labelThree: '',
			data: [
				{
					'labelOne': 'Doc Type:',
					'labelTwo': 'Status:',
					'labelThree': 'Failure Reason:',
					type: 'Jaison',
					status: 'document',
					failureReason: 'NOn'
				}
			]
		},
		{
			firstName: 'Jaison',
			verificationStatus: 'verify'
		}
	];
	status = 'document';
	documentStatus = [
		{
			'labelOne': 'Doc Type:',
			'labelTwo': 'Status:',
			'labelThree': 'Failure Reason:',
			type: 'Jaison',
			status: 'document'
		},
		{
			'labelOne': 'Doc Type:',
			type: 'Jaison',
			status: 'verify'
		}
	];
	mindate: Date;
	expMaxDate: Date;
	expMinDate: string;

	// header = [
	// 	{ id: 'statedate', title: 'startDate_TblColHdr', type: 'Date' },
	// 	{ id: 'enddate', title: 'endDate_TblColHdr', type: 'Date' },
	// 	{ id: 'lotid', title: 'lotID_TbldColHdr', type: 'Number' },
	// 	{ id: 'myStatus', title: 'myTaskStatus_TblColHdr', type: 'String' },
	// 	{ id: 'stepsCompleted', title: 'stepsCompleted_TblColHdr', type: 'String' },
	// 	{ id: 'status', title: 'overallStatus_TblColHdr', type: 'String' }
	// ];

	facilityAddress = {
		registeredName: 'Finca Nueva',
		phone: '+123 456-7654',
		email: 'info@FincaNueva.com',
		address: 'Finca Nueva, Calle Augusto Angulo 130, Miraflores, Perú, 15048',
	};
	data = [
		{
			'statedate': '2019-10-03T06:53:33.230Z',
			'enddate': '-', 'lotid': '123',
			'myStatus': 'complete_TblValue',
			'stepsCompleted': '1/4',
			'status': 'inProgress_TblValue'
		}
		, {
			'statedate': '2019-10-03T05:45:45.835Z',
			'enddate': '2019-10-03T06:01:57.619Z',
			'lotid': '121', 'myStatus': 'complete_TblValue',
			'stepsCompleted': '4/4', 'status': 'complete_TblValue'
		},
		{
			'statedate': '2019-10-01T19:26:04.779Z', 'enddate': '-', 'lotid': '222',
			'myStatus': 'complete_TblValue', 'stepsCompleted': '1/4', 'status': 'inProgress_TblValue'
		},
		{
			'statedate': '2019-09-17T13:55:04.161Z', 'enddate': '-', 'lotid': '5',
			'myStatus': 'complete_TblValue', 'stepsCompleted': '1/4', 'status': 'inProgress_TblValue'
		},
		{
			'statedate': '2019-09-10T13:55:04.161Z', 'enddate': '-', 'lotid': '4',
			'myStatus': 'complete_TblValue', 'stepsCompleted': '2/4', 'status': 'inProgress_TblValue'
		}];
	colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', '#c2c1c1'];
	statusKeywords = ['Completed', 'Incomplete', 'In Progress', 'Pending'];
	statusForDisplayTable = ['complete_TblValue', 'incomplete_TblValue', 'inProgress_TblValue', 'notStarted_TblValue'];
	dropDownData = [];
	patchDropDown;
	constructor(private fb: FormBuilder,
		private sukuModalService: SukuModalService,
		private sukuLoaderService: SukuLoaderService,
		private sukuTheme: SukuWebcomponentsService,
		private translate: TranslateService
	) {
		this.sukuTheme.setSukuTheme();
		this.translate.use('es-pe');
	}

	ngOnInit() {
		// this.openSomething();
		this.test = this.fb.group({
			customer: this.fb.array([]),
			'controlOne': '',
			'controlTwo': '',
			'controlThree': '',
			'controlFour': '',
			publishDate: '',
			expiryDate: '',
			accountType: '',
			CitizensReserveTOSCheck: ''
		});
		const userInfo = {
			userId: 474,
			userName: 'Abigail'
		};
		(<FormArray>this.test.get('customer')).push(this.CreateCustomercontrols());
		this.messageData.forEach((data) => {
			const messageObj = {
				message: data.message,
				timestamp: data.dateTime,
				userId: userInfo.userId,
				userName: data.fromUserName,
				sender: {
					userId: data.fromUserId,
				},
				receiver: {
					userId: userInfo.userId,
					userName: userInfo.userName,
				},
			};
			this.messageArray.push(messageObj);
		});
		this.currentdate();
		const d = new Date();

		if (this.isLeapYear(d.getFullYear())) {
			for (let i = 1; i <= 53; i++) {
				this.dropDownData.push({ lot: i });
			}
		} else {
			for (let i = 1; i <= 52; i++) {
				this.dropDownData.push({ lot: i });
			}
		}
		console.log('this.dropDownData.', this.dropDownData);
		const year = d.getFullYear();
		const month = d.getMonth();
		console.log('this.getWeeksNum.', this.getWeeksNum());
		this.patchDropDown = '45';
		console.log('this.patchDropDown.', this.patchDropDown);
		// this.open();
	}

	CreateCustomercontrols(): FormGroup {
		return this.fb.group({
			userId: new FormControl(''),
			firstName: new FormControl('', [
				Validators.pattern('[a-z/A-Z]*'),
				Validators.minLength(3),
				Validators.maxLength(60)
			]),
			lastName: new FormControl('', [
				Validators.pattern('[a-z/A-Z]*'),
				Validators.minLength(3),
				Validators.maxLength(60)
			]),
			email: new FormControl('', [
				Validators.pattern('^[a-zA-Z0-9.]+@[a-zA-Z0-9]+(.)?[a-zA-Z0-9]{2,6}?.[a-zA-Z]{2,6}$')
			]),
			ipAddress: new FormControl(''),
			address1: new FormControl('', [Validators.minLength(3), Validators.maxLength(50)]),
			city: new FormControl('', [Validators.minLength(1), Validators.maxLength(25)]),
			state: new FormControl('', [
				Validators.pattern('[a-z/A-Z]*'),
				Validators.minLength(2),
				Validators.maxLength(2)
			]),
			postalCode: new FormControl('', [Validators.pattern('[0-9]{5}')]),
			businessClassification: new FormControl(''),
			businessType: new FormControl(''),
			type: new FormControl(''),
			ein: new FormControl('', [Validators.pattern('[0-9]{2}[0-9]{7}')]),
			businessName: new FormControl('', [Validators.minLength(3), Validators.maxLength(50)]),
			dateOfBirth: new FormControl(''),
			ssn: new FormControl('', [Validators.pattern('[0-9]{4}')]),
			controller: this.fb.group({
				firstName: new FormControl('', [
					Validators.pattern('[a-z/A-Z]*'),
					Validators.minLength(3),
					Validators.maxLength(60)
				]),
				lastName: new FormControl('', [
					Validators.pattern('[a-z/A-Z]*'),
					Validators.minLength(3),
					Validators.maxLength(60)
				]),
				title: new FormControl('', [Validators.minLength(3), Validators.maxLength(60)]),
				ssn: new FormControl('', [Validators.pattern('[0-9]{4}')]),
				dateOfBirth: new FormControl(''),
				address: this.fb.group({
					address1: new FormControl('', [Validators.minLength(3), Validators.maxLength(60)]),
					address2: new FormControl('', [Validators.minLength(3), Validators.maxLength(60)]),
					city: new FormControl('', [Validators.minLength(1), Validators.maxLength(60)]),
					stateProvinceRegion: new FormControl({ value: '', disabled: true }),
					country: new FormControl(''),
					postalCode: new FormControl('', [Validators.pattern('[0-9]{5}')])
				})
			})
		});
	}

	CreateCustomerSubmit(s) {
		console.log('CreateCustomerSubmit', s, this.test.value);
		// const userinfo = this.ls.get('userInfo');
		const payLoad = this.test.value;
		const index = 0;
		// payLoad.customer[index].controller.address.country = this.countryNamev;
		payLoad.customer[index].ipAddress = window.origin;
		// payLoad.customer[index].userId = userinfo.userId;
		// payLoad.customer[index].type = this.industryTypeName;
		// we are doing this later should add type 'which type of account should we create'
		payLoad.customer[index].type = 'personal';
		// payLoad.customer[index].dateOfBirth = this.datePipe.transform(
		// 	payLoad.customer[index].dateOfBirth,
		// 	'yyyy-MM-dd'
		// );
		const Mappayload = [
			{
				userId: payLoad.customer[index].userId,
				firstName: payLoad.customer[index].firstName,
				lastName: payLoad.customer[index].lastName,
				email: payLoad.customer[index].email,
				type: payLoad.customer[index].type,
				address1: payLoad.customer[index].address1,
				city: payLoad.customer[index].city,
				state: payLoad.customer[index].state,
				postalCode: payLoad.customer[index].postalCode,
				dateOfBirth: payLoad.customer[index].dateOfBirth,
				ssn: payLoad.customer[index].ssn
			}
		];
		console.log('onSubmit', Mappayload);
	}

	onSubmit(s) {
		console.log('onSubmit', s);
	}

	isLeapYear(year) {
		return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
	}

	action(e) {
		console.log('e', e.value);
	}

	printValue(e) {
		console.log('xxxxxxxxxxxxxxxxxxx', e)
	}

	getWeeksNum() {
		const d = new Date();
		const date = new Date(d.getTime());
		date.setHours(0, 0, 0, 0);
		// Thursday in current week decides the year.
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		// January 4 is always in week 1.
		const week1 = new Date(date.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
			- 3 + (week1.getDay() + 6) % 7) / 7);
	}


	sendMessage(e) {
		console.log(e);
	}


	sendPublishDate() {
		console.log('this is publish date value called ');
		const publishDate = new Date(this.test.controls['publishDate'].value);
		//  this.expMinDate = publishDate;
		let maxdate = new Date().setDate(publishDate.getDate() + 1);
		this.expMinDate = new Date(maxdate).toISOString();
	}

	sendMaxdate(expiryDate) {
		console.log('this is expirt date', expiryDate)
		this.expMaxDate = new Date(expiryDate);
	}

	currentdate() {
		const todayTime = new Date();
		const month = todayTime.getMonth();
		const day = todayTime.getDate();
		const year = todayTime.getFullYear();
		this.mindate = new Date(year, month, day);
		return year + '-' + month + '-' + day;
	}

	checkToogle() {
		this.checkboxChecked = !this.checkboxChecked;
		console.log('this.checkboxChecked', this.checkboxChecked)
	}

	open() {
		console.log('dialog');
		// 'imgSrc': 'http://34.217.89.204/assets/icons/verified_icon.png',
		const data = {
			'titleOne': 'claims_PopTitle',
			'titleTwo': 'claims_PopText',
			'buttonLableTwo': 'claims_PopBtnYes',
			'buttonLableOne': 'claims_PopBtnNo',
			'buttonLableThree': 'claims_PopBtnCancel',
			'showCloseButton': true,
			'openDialog': true
		};
		// this.sukuLoaderService.openLoader(data);
		this.sukuModalService.openConfirmationDialog(data);
		this.sukuModalService.onDialogClose.subscribe(res => {
			// this.closePopup();
			if (res == 'cancel') {
				console.log('works')
			}
		})
		// setTimeout(() => {
		//   data = {
		//     'imgSrc': 'http://34.217.89.204/assets/icons/verified_icon.png',
		//     'message': 'Success',
		//     'description': 'Description',
		//     'loader': 'disable',
		//     'buttonText': 'Action',
		//     'open': false
		//   };
		//   // this.sukuLoaderService.openLoader(data);
		//   this.sukuModalService.openConfirmationModalDialog(data);
		// }, 5000);
	}

	// openSomething() {
	//   const data = {
	//     controlOneRequired: true,
	//     controlTwoRequired: true,
	//     controlTwoPatternEnabled: true,
	//     controlTwoPattern: '[0-9]{9}[a-zA-Z]{1}[0-9]{5,10}$',
	//     dateControlOneRequired: true,
	//     dateControlTwoRequired: false,
	//     startDateMaxDate: new Date(),
	//     endDateMinDate: new Date(),
	//   }
	//   this.sukuModalService.openLicenseModalDialogDialog(data);
	// }

	openSomething() {
		let data = {
			'imgSrc': '',
			'imgId': '',
			'icon': 'suku-alert-icon',
			'iconId': 'suku-icon',
			'iconCustomClass': 'suku-xl',
			'message': 'confirm shipment status',
			'description': 'Are you sure you would mark this listing/product as shipped?',
			'loader': 'disable',
			'buttonText': '',
			'messageCustomClass': '',
			'descriptionCustomClass': '',
			'descriptionOneCustomClass': '',
			'descriptionOne': 'Note: Once the listing/Product is marked as shipped, you will not be able to edit the tracking number or comments.',
			'buttonCustomClass': '',
			'messageId': '',
			'buttonId': '',
			cancelBtnText: 'Cancel',
			submitBtnTxt: 'Confirm',
			cancelBtnCustomClass: '',
			submitBtnCustomClass: '',
			controlOne: 'controlOne',
			controlTwo: 'controlTwo',
			controlOneId: 'contentOne',
			controlTwoId: 'ContentTwo',
			controlOnePlaceholder: 'Tracking Number (Optional)',
			controlTwoPlaceholder: 'Comments*',
			controlTwoRquiredErrorMsg: 'Cannot be blank.',
			openDialog: true,
			controlTwoRequired: true
		}
		this.sukuModalService.openConfirmationStatusModalDialog(data);
	}

	call(s) {
		console.log('dkdjs', s);
	}

	getLotId(l) {
		console.log('this is l :', l);
	}

	languageChange(event) {
		console.log(event);
		if (event.checked) {
			this.translate.use('es-pe');
		} else {
			this.translate.use('en');
		}
	}
}
