import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Observable, Observer } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SukuLoaderService, SukuModalService, SukuWebcomponentsService } from 'projects/suku-webcomponents/src/public_api';
// import { SukuModalService, SukuLoaderService } from 'suku-webcomponents';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	test: FormGroup;
	buttonData = {
		title: 'Marketplace',
		icon: 'fa fa-shopping-cart',
		path: '/userDashboard',
		disabled: false,
		id: 'Marketplace'
	};

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

	constructor(private fb: FormBuilder, private sukuModalService: SukuModalService,
		private sukuLoaderService: SukuLoaderService, private sukuTheme: SukuWebcomponentsService
	) {
		this.sukuTheme.setSukuTheme();
	}

	ngOnInit() {
		this.test = this.fb.group({
			'controlOne': '',
			'controlTwo': '',
			'controlThree': '',
			'controlFour': '',
			publishDate: '',
			expiryDate: '',
		});
		const userInfo = {
			userId: 474,
			userName: 'Abigail'
		};

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
	}
	sendMessage(e) {
		console.log(e);
	}
	sendPublishDate() {
		console.log("this is publish date value called ");
		const publishDate = new Date(this.test.controls["publishDate"].value);
		//  this.expMinDate = publishDate;
		let maxdate = new Date().setDate(publishDate.getDate() + 1);
		this.expMinDate = new Date(maxdate).toISOString();
	}

	sendMaxdate(expiryDate) {
		console.log("this is expirt date", expiryDate)
		this.expMaxDate = new Date(expiryDate);
	}

	currentdate() {
		const todayTime = new Date();
		const month = todayTime.getMonth();
		const day = todayTime.getDate();
		const year = todayTime.getFullYear();
		this.mindate = new Date(year, month, day);
		return year + "-" + month + "-" + day;
	}

	open() {
		console.log('dialog');
		// 'imgSrc': 'http://34.217.89.204/assets/icons/verified_icon.png',
		const data = {
			'icon': 'suku-success-icon',
			'message': 'please wait',
			'description': 'Description',
			'loader': 'enable',
			'buttonText': 'Action',
			'openDialog': true
		};
		// this.sukuLoaderService.openLoader(data);
		this.sukuModalService.openConfirmationModalDialog(data);
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
			controlOneRequired: true,
			controlTwoRequired: true,
			controlTwoPatternEnabled: true,
			controlTwoPattern: '[0-9]{9}[a-zA-Z]{1}[0-9]{5,10}$',
			dateControlOneRequired: true,
			dateControlTwoRequired: false,
			startDateMaxDate: new Date(),
			endDateMinDate: new Date(),
		}
		this.sukuModalService.openLicenseModalDialogDialog(data);
	}

	header = [
		{ id: 'statedate', title: 'Start Date' },
		{ id: 'enddate', title: 'End Date' },
		{ id: 'lname', title: 'Lot ID' },
		{ id: 'myStatus', title: 'My Task Status ' },
		{ id: 'stepsCompleted', title: 'Steps Completed ' },
		{ id: 'Status', title: 'Overall Status' }
	]
	facilityAddress = {
		registeredName: 'Finca Nueva',
		phone: '+123 456-7654',
		email: 'info@FincaNueva.com',
		address: 'Finca Nueva, Calle Augusto Angulo 130, Miraflores, Perú, 15048',
	};
	data = [
		{
			statedate: "Aug-30-2019 ", enddate: "Aug-31-2019 ",
			lotid: "N/A", myStatus: 'completed', stepsCompleted: "2/5", status: 'not-completed'
		},
		{
			statedate: "Aug-30-2019 ", enddate: "Aug-31-2019 ",
			lotid: "N/A", myStatus: 'completed', stepsCompleted: "3/5", status: 'not-completed'
		},
		{
			statedate: "Aug-30-2019 ", enddate: "Aug-31-2019 ",
			lotid: "N/A", myStatus: 'completed', stepsCompleted: "5/5", status: 'completed'
		},
		{
			statedate: "Aug-30-2019 ", enddate: "Aug-31-2019 ",
			lotid: "N/A", myStatus: 'completed', stepsCompleted: "3/6", status: 'in-progress'
		},
		{
			statedate: "Aug-30-2019 ", enddate: "Aug-31-2019 ",
			lotid: "N/A", myStatus: 'completed', stepsCompleted: "3/3", status: 'completed'
		},
		{
			statedate: "Aug-30-2019 ", enddate: "Aug-31-2019",
			lotid: "N/A", myStatus: 'pending', stepsCompleted: "1/6", status: 'not-completed'
		}
	]
}
