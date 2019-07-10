import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Observable, Observer } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SukuModalService } from 'projects/suku-webcomponents/src/public_api';
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
	constructor(private fb: FormBuilder, private SukuModalService: SukuModalService) { }

	ngOnInit() {
		this.test = this.fb.group({
			'testControl': ''
		});
		const userInfo = {
			userId: 474,
			userName: 'Abigail'
		};
		// tslint:disable-next-line:max-line-length
		this.chatImg = 'data:image/jpeg;base64,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';
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
			console.log(data);
			this.messageArray.push(messageObj);
		});
		console.log('messageArray', this.messageArray);
	}
	sendMessage(e) {
		console.log(e);
	}

	open() {
		const data = {
			icon: '',
			titleOne: 'Are you sure you want to delete ?',
		};
		// this.SukuModalService.openInfoModal(data);
	}
}

