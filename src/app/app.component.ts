import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Observable, Observer } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SukuModalService, SukuLoaderService } from 'projects/suku-webcomponents/src/public_api';
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

	constructor(private fb: FormBuilder, private sukuModalService: SukuModalService,
		private sukuLoaderService: SukuLoaderService
	) { }

	ngOnInit() {
		this.test = this.fb.group({
			'controlOne': '',
			'controlTwo': '',
			'controlThree': '',
			'controlFour': '',
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
	}
	sendMessage(e) {
		console.log(e);
	}

	open() {
		const data = {
		     // controlOnePatternEnabled: ',
			 controlOneRequired: true,
			 controlTwoRequired: true,
             controlTwoPatternEnabled: true,
             controlTwoPattern: '[0-9]{9}[a-zA-Z]{1}[0-9]{5,10}$',
			 dateControlOneRequired: true,
			dateControlTwoRequired: false,
		};

		// this.sukuLoaderService.openLoader(data);
		this.sukuModalService.openConfirmationModalDialog(data);
	}
}

