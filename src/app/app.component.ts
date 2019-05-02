import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Observable, Observer } from 'rxjs';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	fundingDetails = [ 
		{},
		{},
		{}
	]
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
			channels: [ 'ach' ],
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
			channels: [ 'ach' ],
			bankName: 'SANDBOX TEST BANK',
			fingerprint: '96364ee2f5572dc50451ba589429be9d034c094ffebade9d2f8c144a97f293cd'
		}
	];
	title = 'suku-lib';
	custom = 'default';
	base64Image;
	response = [];
	treeDataApi = [
		{
			uid: '1000',
			product: {
				id: '1000',
				name: 'item Ax1000',
				description: 'item A'
			},
			parent: '',
			children: [ '1002', '1003' ],
			graphLinks: [
				{
					_id: '5c41e554bd81f31d5d778b42',
					children: [],
					uid: '1008',
					product: {
						id: '1008',
						name: 'item Hx1008',
						description: 'item H'
					},
					links: [
						{
							uid: '1007',
							type: 'usedIn'
						}
					],
					parent: '1007',
					depth: 3,
					relations: []
				},
				{
					_id: '5c4b1ec969f7e00047f5f1b5',
					timestamp: '2019-01-25T10:50:50.097Z',
					children: [],
					uid: '1013',
					product: {
						id: '1013',
						name: '0xA1013',
						description: 'sample decription'
					},
					links: [
						{
							_id: '5c4b1ec969f7e00047f5f1b6',
							uid: '1004',
							type: 'usedIn'
						}
					],
					parent: '1004',
					__v: 0,
					depth: 2,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b3e',
					children: [],
					uid: '1005',
					product: {
						id: '1005',
						name: 'item Ex1005',
						description: 'item E'
					},
					links: [
						{
							uid: '1003',
							type: 'usedIn'
						}
					],
					parent: '1003',
					depth: 1,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b3c',
					children: [],
					uid: '1002',
					product: {
						id: '1002',
						name: 'item Bx1002',
						description: 'item B'
					},
					links: [
						{
							uid: '1001',
							type: 'usedIn'
						}
					],
					parent: '1001',
					depth: 0,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b3f',
					children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
					uid: '1004',
					product: {
						id: '1004',
						name: 'item Dx1004',
						description: 'item D'
					},
					links: [
						{
							uid: '1003',
							type: 'usedIn'
						},
						{
							uid: '1006',
							type: 'composedOf'
						},
						{
							uid: '1007',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e5169f7e00047f5f1ab',
							uid: '1009',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e7e69f7e00047f5f1ae',
							uid: '1010',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e9f69f7e00047f5f1b1',
							uid: '1011',
							type: 'composedOf'
						},
						{
							_id: '5c4b1eba69f7e00047f5f1b4',
							uid: '1012',
							type: 'composedOf'
						},
						{
							_id: '5c4b1ec969f7e00047f5f1b7',
							uid: '1013',
							type: 'composedOf'
						}
					],
					parent: '1003',
					depth: 1,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b40',
							children: [],
							uid: '1006',
							product: {
								id: '1006',
								name: 'item Fx1006',
								description: 'item F'
							},
							links: [
								{
									uid: '1004',
									type: 'usedIn'
								}
							],
							parent: '1004',
							depth: 2,
							relations: []
						},
						{
							_id: '5c41e554bd81f31d5d778b41',
							children: [ '1008' ],
							uid: '1007',
							product: {
								id: '1007',
								name: 'item Gx1007',
								description: 'item G'
							},
							links: [
								{
									uid: '1004',
									type: 'usedIn'
								},
								{
									uid: '1008',
									type: 'composedOf'
								}
							],
							parent: '1004',
							depth: 2,
							relations: [
								{
									_id: '5c41e554bd81f31d5d778b42',
									children: [],
									uid: '1008',
									product: {
										id: '1008',
										name: 'item Hx1008',
										description: 'item H'
									},
									links: [
										{
											uid: '1007',
											type: 'usedIn'
										}
									],
									parent: '1007',
									depth: 3,
									relations: []
								}
							]
						},
						{
							_id: '5c4b1e5169f7e00047f5f1a9',
							timestamp: '2019-01-25T10:50:50.097Z',
							children: [],
							uid: '1009',
							product: {
								id: '1009',
								name: '0xA1009',
								description: 'sample decription'
							},
							links: [
								{
									_id: '5c4b1e5169f7e00047f5f1aa',
									uid: '1004',
									type: 'usedIn'
								}
							],
							parent: '1004',
							__v: 0,
							depth: 2,
							relations: []
						},
						{
							_id: '5c4b1e7e69f7e00047f5f1ac',
							timestamp: '2019-01-25T10:50:50.097Z',
							children: [],
							uid: '1010',
							product: {
								id: '1010',
								name: '0xA1010',
								description: 'sample decription'
							},
							links: [
								{
									_id: '5c4b1e7e69f7e00047f5f1ad',
									uid: '1004',
									type: 'usedIn'
								}
							],
							parent: '1004',
							__v: 0,
							depth: 2,
							relations: []
						},
						{
							_id: '5c4b1e9f69f7e00047f5f1af',
							timestamp: '2019-01-25T10:50:50.097Z',
							children: [],
							uid: '1011',
							product: {
								id: '1011',
								name: '0xA1011',
								description: 'sample decription'
							},
							links: [
								{
									_id: '5c4b1e9f69f7e00047f5f1b0',
									uid: '1004',
									type: 'usedIn'
								}
							],
							parent: '1004',
							__v: 0,
							depth: 2,
							relations: []
						},
						{
							_id: '5c4b1eba69f7e00047f5f1b2',
							timestamp: '2019-01-25T10:50:50.097Z',
							children: [],
							uid: '1012',
							product: {
								id: '1012',
								name: '0xA1012',
								description: 'sample decription'
							},
							links: [
								{
									_id: '5c4b1eba69f7e00047f5f1b3',
									uid: '1004',
									type: 'usedIn'
								}
							],
							parent: '1004',
							__v: 0,
							depth: 2,
							relations: []
						},
						{
							_id: '5c4b1ec969f7e00047f5f1b5',
							timestamp: '2019-01-25T10:50:50.097Z',
							children: [],
							uid: '1013',
							product: {
								id: '1013',
								name: '0xA1013',
								description: 'sample decription'
							},
							links: [
								{
									_id: '5c4b1ec969f7e00047f5f1b6',
									uid: '1004',
									type: 'usedIn'
								}
							],
							parent: '1004',
							__v: 0,
							depth: 2,
							relations: []
						}
					]
				},
				{
					_id: '5c4b1e7e69f7e00047f5f1ac',
					timestamp: '2019-01-25T10:50:50.097Z',
					children: [],
					uid: '1010',
					product: {
						id: '1010',
						name: '0xA1010',
						description: 'sample decription'
					},
					links: [
						{
							_id: '5c4b1e7e69f7e00047f5f1ad',
							uid: '1004',
							type: 'usedIn'
						}
					],
					parent: '1004',
					__v: 0,
					depth: 2,
					relations: []
				},
				{
					_id: '5c4b1e9f69f7e00047f5f1af',
					timestamp: '2019-01-25T10:50:50.097Z',
					children: [],
					uid: '1011',
					product: {
						id: '1011',
						name: '0xA1011',
						description: 'sample decription'
					},
					links: [
						{
							_id: '5c4b1e9f69f7e00047f5f1b0',
							uid: '1004',
							type: 'usedIn'
						}
					],
					parent: '1004',
					__v: 0,
					depth: 2,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b3d',
					children: [ '1004', '1005' ],
					uid: '1003',
					product: {
						id: '1003',
						name: 'item Cx1003',
						description: 'item C'
					},
					links: [
						{
							uid: '1001',
							type: 'usedIn'
						},
						{
							uid: '1004',
							type: 'composedOf'
						},
						{
							uid: '1005',
							type: 'composedOf'
						}
					],
					parent: '1001',
					depth: 0,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b3f',
							children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
							uid: '1004',
							product: {
								id: '1004',
								name: 'item Dx1004',
								description: 'item D'
							},
							links: [
								{
									uid: '1003',
									type: 'usedIn'
								},
								{
									uid: '1006',
									type: 'composedOf'
								},
								{
									uid: '1007',
									type: 'composedOf'
								},
								{
									_id: '5c4b1e5169f7e00047f5f1ab',
									uid: '1009',
									type: 'composedOf'
								},
								{
									_id: '5c4b1e7e69f7e00047f5f1ae',
									uid: '1010',
									type: 'composedOf'
								},
								{
									_id: '5c4b1e9f69f7e00047f5f1b1',
									uid: '1011',
									type: 'composedOf'
								},
								{
									_id: '5c4b1eba69f7e00047f5f1b4',
									uid: '1012',
									type: 'composedOf'
								},
								{
									_id: '5c4b1ec969f7e00047f5f1b7',
									uid: '1013',
									type: 'composedOf'
								}
							],
							parent: '1003',
							depth: 1,
							relations: [
								{
									_id: '5c41e554bd81f31d5d778b40',
									children: [],
									uid: '1006',
									product: {
										id: '1006',
										name: 'item Fx1006',
										description: 'item F'
									},
									links: [
										{
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									depth: 2,
									relations: []
								},
								{
									_id: '5c41e554bd81f31d5d778b41',
									children: [ '1008' ],
									uid: '1007',
									product: {
										id: '1007',
										name: 'item Gx1007',
										description: 'item G'
									},
									links: [
										{
											uid: '1004',
											type: 'usedIn'
										},
										{
											uid: '1008',
											type: 'composedOf'
										}
									],
									parent: '1004',
									depth: 2,
									relations: [
										{
											_id: '5c41e554bd81f31d5d778b42',
											children: [],
											uid: '1008',
											product: {
												id: '1008',
												name: 'item Hx1008',
												description: 'item H'
											},
											links: [
												{
													uid: '1007',
													type: 'usedIn'
												}
											],
											parent: '1007',
											depth: 3,
											relations: []
										}
									]
								},
								{
									_id: '5c4b1e5169f7e00047f5f1a9',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1009',
									product: {
										id: '1009',
										name: '0xA1009',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1e5169f7e00047f5f1aa',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1e7e69f7e00047f5f1ac',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1010',
									product: {
										id: '1010',
										name: '0xA1010',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1e7e69f7e00047f5f1ad',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1e9f69f7e00047f5f1af',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1011',
									product: {
										id: '1011',
										name: '0xA1011',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1e9f69f7e00047f5f1b0',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1eba69f7e00047f5f1b2',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1012',
									product: {
										id: '1012',
										name: '0xA1012',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1eba69f7e00047f5f1b3',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1ec969f7e00047f5f1b5',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1013',
									product: {
										id: '1013',
										name: '0xA1013',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1ec969f7e00047f5f1b6',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								}
							]
						},
						{
							_id: '5c41e554bd81f31d5d778b3e',
							children: [],
							uid: '1005',
							product: {
								id: '1005',
								name: 'item Ex1005',
								description: 'item E'
							},
							links: [
								{
									uid: '1003',
									type: 'usedIn'
								}
							],
							parent: '1003',
							depth: 1,
							relations: []
						}
					]
				},
				{
					_id: '5c41e554bd81f31d5d778b40',
					children: [],
					uid: '1006',
					product: {
						id: '1006',
						name: 'item Fx1006',
						description: 'item F'
					},
					links: [
						{
							uid: '1004',
							type: 'usedIn'
						}
					],
					parent: '1004',
					depth: 2,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b41',
					children: [ '1008' ],
					uid: '1007',
					product: {
						id: '1007',
						name: 'item Gx1007',
						description: 'item G'
					},
					links: [
						{
							uid: '1004',
							type: 'usedIn'
						},
						{
							uid: '1008',
							type: 'composedOf'
						}
					],
					parent: '1004',
					depth: 2,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b42',
							children: [],
							uid: '1008',
							product: {
								id: '1008',
								name: 'item Hx1008',
								description: 'item H'
							},
							links: [
								{
									uid: '1007',
									type: 'usedIn'
								}
							],
							parent: '1007',
							depth: 3,
							relations: []
						}
					]
				},
				{
					_id: '5c4b1e5169f7e00047f5f1a9',
					timestamp: '2019-01-25T10:50:50.097Z',
					children: [],
					uid: '1009',
					product: {
						id: '1009',
						name: '0xA1009',
						description: 'sample decription'
					},
					links: [
						{
							_id: '5c4b1e5169f7e00047f5f1aa',
							uid: '1004',
							type: 'usedIn'
						}
					],
					parent: '1004',
					__v: 0,
					depth: 2,
					relations: []
				},
				{
					_id: '5c4b1eba69f7e00047f5f1b2',
					timestamp: '2019-01-25T10:50:50.097Z',
					children: [],
					uid: '1012',
					product: {
						id: '1012',
						name: '0xA1012',
						description: 'sample decription'
					},
					links: [
						{
							_id: '5c4b1eba69f7e00047f5f1b3',
							uid: '1004',
							type: 'usedIn'
						}
					],
					parent: '1004',
					__v: 0,
					depth: 2,
					relations: []
				}
			],
			links: [
				{
					uid: '1002',
					type: 'composedOf'
				},
				{
					uid: '1003',
					type: 'composedOf'
				}
			],
			relations: [
				{
					_id: '5c41e554bd81f31d5d778b3c',
					children: [],
					uid: '1002',
					product: {
						id: '1002',
						name: 'item Bx1002',
						description: 'item B'
					},
					links: [
						{
							uid: '1001',
							type: 'usedIn'
						}
					],
					parent: '1001',
					depth: 0,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b3d',
					children: [ '1004', '1005' ],
					uid: '1003',
					product: {
						id: '1003',
						name: 'item Cx1003',
						description: 'item C'
					},
					links: [
						{
							uid: '1001',
							type: 'usedIn'
						},
						{
							uid: '1004',
							type: 'composedOf'
						},
						{
							uid: '1005',
							type: 'composedOf'
						}
					],
					parent: '1001',
					depth: 0,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b3f',
							children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
							uid: '1004',
							product: {
								id: '1004',
								name: 'item Dx1004',
								description: 'item D'
							},
							links: [
								{
									uid: '1003',
									type: 'usedIn'
								},
								{
									uid: '1006',
									type: 'composedOf'
								},
								{
									uid: '1007',
									type: 'composedOf'
								},
								{
									_id: '5c4b1e5169f7e00047f5f1ab',
									uid: '1009',
									type: 'composedOf'
								},
								{
									_id: '5c4b1e7e69f7e00047f5f1ae',
									uid: '1010',
									type: 'composedOf'
								},
								{
									_id: '5c4b1e9f69f7e00047f5f1b1',
									uid: '1011',
									type: 'composedOf'
								},
								{
									_id: '5c4b1eba69f7e00047f5f1b4',
									uid: '1012',
									type: 'composedOf'
								},
								{
									_id: '5c4b1ec969f7e00047f5f1b7',
									uid: '1013',
									type: 'composedOf'
								}
							],
							parent: '1003',
							depth: 1,
							relations: [
								{
									_id: '5c41e554bd81f31d5d778b40',
									children: [],
									uid: '1006',
									product: {
										id: '1006',
										name: 'item Fx1006',
										description: 'item F'
									},
									links: [
										{
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									depth: 2,
									relations: []
								},
								{
									_id: '5c41e554bd81f31d5d778b41',
									children: [ '1008' ],
									uid: '1007',
									product: {
										id: '1007',
										name: 'item Gx1007',
										description: 'item G'
									},
									links: [
										{
											uid: '1004',
											type: 'usedIn'
										},
										{
											uid: '1008',
											type: 'composedOf'
										}
									],
									parent: '1004',
									depth: 2,
									relations: [
										{
											_id: '5c41e554bd81f31d5d778b42',
											children: [],
											uid: '1008',
											product: {
												id: '1008',
												name: 'item Hx1008',
												description: 'item H'
											},
											links: [
												{
													uid: '1007',
													type: 'usedIn'
												}
											],
											parent: '1007',
											depth: 3,
											relations: []
										}
									]
								},
								{
									_id: '5c4b1e5169f7e00047f5f1a9',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1009',
									product: {
										id: '1009',
										name: '0xA1009',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1e5169f7e00047f5f1aa',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1e7e69f7e00047f5f1ac',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1010',
									product: {
										id: '1010',
										name: '0xA1010',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1e7e69f7e00047f5f1ad',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1e9f69f7e00047f5f1af',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1011',
									product: {
										id: '1011',
										name: '0xA1011',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1e9f69f7e00047f5f1b0',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1eba69f7e00047f5f1b2',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1012',
									product: {
										id: '1012',
										name: '0xA1012',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1eba69f7e00047f5f1b3',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c4b1ec969f7e00047f5f1b5',
									timestamp: '2019-01-25T10:50:50.097Z',
									children: [],
									uid: '1013',
									product: {
										id: '1013',
										name: '0xA1013',
										description: 'sample decription'
									},
									links: [
										{
											_id: '5c4b1ec969f7e00047f5f1b6',
											uid: '1004',
											type: 'usedIn'
										}
									],
									parent: '1004',
									__v: 0,
									depth: 2,
									relations: []
								}
							]
						},
						{
							_id: '5c41e554bd81f31d5d778b3e',
							children: [],
							uid: '1005',
							product: {
								id: '1005',
								name: 'item Ex1005',
								description: 'item E'
							},
							links: [
								{
									uid: '1003',
									type: 'usedIn'
								}
							],
							parent: '1003',
							depth: 1,
							relations: []
						}
					]
				}
			],
			depth: -1
		}
	];
	parentPayload = [
		{
			uid: '1007',
			product: {
				id: '1007',
				name: 'item Gx1007',
				description: 'item G'
			},
			parent: '1004',
			children: [ '1008' ],
			graphLinks: [
				{
					_id: '5c41e554bd81f31d5d778b3d',
					children: [ '1004', '1005' ],
					uid: '1003',
					product: {
						id: '1003',
						name: 'item Cx1003',
						description: 'item C'
					},
					links: [
						{
							uid: '1001',
							type: 'usedIn'
						},
						{
							uid: '1004',
							type: 'composedOf'
						},
						{
							uid: '1005',
							type: 'composedOf'
						}
					],
					parent: '1001',
					depth: 1,
					relations: []
				},
				{
					_id: '5c41e554bd81f31d5d778b3f',
					children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
					uid: '1004',
					product: {
						id: '1004',
						name: 'item Dx1004',
						description: 'item D'
					},
					links: [
						{
							uid: '1003',
							type: 'usedIn'
						},
						{
							uid: '1006',
							type: 'composedOf'
						},
						{
							uid: '1007',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e5169f7e00047f5f1ab',
							uid: '1009',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e7e69f7e00047f5f1ae',
							uid: '1010',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e9f69f7e00047f5f1b1',
							uid: '1011',
							type: 'composedOf'
						},
						{
							_id: '5c4b1eba69f7e00047f5f1b4',
							uid: '1012',
							type: 'composedOf'
						},
						{
							_id: '5c4b1ec969f7e00047f5f1b7',
							uid: '1013',
							type: 'composedOf'
						}
					],
					parent: '1003',
					depth: 0,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b3d',
							children: [ '1004', '1005' ],
							uid: '1003',
							product: {
								id: '1003',
								name: 'item Cx1003',
								description: 'item C'
							},
							links: [
								{
									uid: '1001',
									type: 'usedIn'
								},
								{
									uid: '1004',
									type: 'composedOf'
								},
								{
									uid: '1005',
									type: 'composedOf'
								}
							],
							parent: '1001',
							depth: 1,
							relations: []
						}
					]
				}
			],
			links: [
				{
					uid: '1004',
					type: 'usedIn'
				},
				{
					uid: '1008',
					type: 'composedOf'
				}
			],
			relations: [
				{
					_id: '5c41e554bd81f31d5d778b3f',
					children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
					uid: '1004',
					product: {
						id: '1004',
						name: 'item Dx1004',
						description: 'item D'
					},
					links: [
						{
							uid: '1003',
							type: 'usedIn'
						},
						{
							uid: '1006',
							type: 'composedOf'
						},
						{
							uid: '1007',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e5169f7e00047f5f1ab',
							uid: '1009',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e7e69f7e00047f5f1ae',
							uid: '1010',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e9f69f7e00047f5f1b1',
							uid: '1011',
							type: 'composedOf'
						},
						{
							_id: '5c4b1eba69f7e00047f5f1b4',
							uid: '1012',
							type: 'composedOf'
						},
						{
							_id: '5c4b1ec969f7e00047f5f1b7',
							uid: '1013',
							type: 'composedOf'
						}
					],
					parent: '1003',
					depth: 0,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b3d',
							children: [ '1004', '1005' ],
							uid: '1003',
							product: {
								id: '1003',
								name: 'item Cx1003',
								description: 'item C'
							},
							links: [
								{
									uid: '1001',
									type: 'usedIn'
								},
								{
									uid: '1004',
									type: 'composedOf'
								},
								{
									uid: '1005',
									type: 'composedOf'
								}
							],
							parent: '1001',
							depth: 1,
							relations: [
								{
									_id: '5c41e554bd81f31d5d778b3d',
									children: [ '1004', '1005' ],
									uid: '1003',
									product: {
										id: '1003',
										name: 'item Cx1005',
										description: 'item C'
									},
									links: [
										{
											uid: '1001',
											type: 'usedIn'
										},
										{
											uid: '1004',
											type: 'composedOf'
										},
										{
											uid: '1005',
											type: 'composedOf'
										}
									],
									parent: '1001',
									depth: 2,
									relations: []
								}
							]
						}
					]
				},
				{
					_id: '5c41e554bd81f31d5d778b3f',
					children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
					uid: '1004',
					product: {
						id: '1004',
						name: 'item Dx1004',
						description: 'item D'
					},
					links: [
						{
							uid: '1003',
							type: 'usedIn'
						},
						{
							uid: '1006',
							type: 'composedOf'
						},
						{
							uid: '1007',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e5169f7e00047f5f1ab',
							uid: '1009',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e7e69f7e00047f5f1ae',
							uid: '1010',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e9f69f7e00047f5f1b1',
							uid: '1011',
							type: 'composedOf'
						},
						{
							_id: '5c4b1eba69f7e00047f5f1b4',
							uid: '1012',
							type: 'composedOf'
						},
						{
							_id: '5c4b1ec969f7e00047f5f1b7',
							uid: '1013',
							type: 'composedOf'
						}
					],
					parent: '1003',
					depth: 0,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b3d',
							children: [ '1004', '1005' ],
							uid: '1003',
							product: {
								id: '1003',
								name: 'item Cx1003',
								description: 'item C'
							},
							links: [
								{
									uid: '1001',
									type: 'usedIn'
								},
								{
									uid: '1004',
									type: 'composedOf'
								},
								{
									uid: '1005',
									type: 'composedOf'
								}
							],
							parent: '1001',
							depth: 1,
							relations: [
								{
									_id: '5c41e554bd81f31d5d778b3d',
									children: [ '1004', '1005' ],
									uid: '1003',
									product: {
										id: '1003',
										name: 'item Cx1005',
										description: 'item C'
									},
									links: [
										{
											uid: '1001',
											type: 'usedIn'
										},
										{
											uid: '1004',
											type: 'composedOf'
										},
										{
											uid: '1005',
											type: 'composedOf'
										}
									],
									parent: '1001',
									depth: 2,
									relations: []
								}
							]
						}
					]
				},
				{
					_id: '5c41e554bd81f31d5d778b3f',
					children: [ '1006', '1007', '1009', '1010', '1011', '1012', '1013' ],
					uid: '1004',
					product: {
						id: '1004',
						name: 'item Dx1004',
						description: 'item D'
					},
					links: [
						{
							uid: '1003',
							type: 'usedIn'
						},
						{
							uid: '1006',
							type: 'composedOf'
						},
						{
							uid: '1007',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e5169f7e00047f5f1ab',
							uid: '1009',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e7e69f7e00047f5f1ae',
							uid: '1010',
							type: 'composedOf'
						},
						{
							_id: '5c4b1e9f69f7e00047f5f1b1',
							uid: '1011',
							type: 'composedOf'
						},
						{
							_id: '5c4b1eba69f7e00047f5f1b4',
							uid: '1012',
							type: 'composedOf'
						},
						{
							_id: '5c4b1ec969f7e00047f5f1b7',
							uid: '1013',
							type: 'composedOf'
						}
					],
					parent: '1003',
					depth: 0,
					relations: [
						{
							_id: '5c41e554bd81f31d5d778b3d',
							children: [ '1004', '1005' ],
							uid: '1003',
							product: {
								id: '1003',
								name: 'item Cx1003',
								description: 'item C'
							},
							links: [
								{
									uid: '1001',
									type: 'usedIn'
								},
								{
									uid: '1004',
									type: 'composedOf'
								},
								{
									uid: '1005',
									type: 'composedOf'
								}
							],
							parent: '1001',
							depth: 1,
							relations: [
								{
									_id: '5c41e554bd81f31d5d778b3d',
									children: [ '1004', '1005' ],
									uid: '1003',
									product: {
										id: '1003',
										name: 'item Cx1005',
										description: 'item C'
									},
									links: [
										{
											uid: '1001',
											type: 'usedIn'
										},
										{
											uid: '1004',
											type: 'composedOf'
										},
										{
											uid: '1005',
											type: 'composedOf'
										}
									],
									parent: '1001',
									depth: 2,
									relations: []
								}
							]
						}
					]
				}
			],
			depth: -1
		}
	];

	composedOf = [
		{
			uid: '1065cbf6-46e2-ea12-3095-14e6bc8208ad',
			timestamp: '2019-02-12T10:57:12.662Z',
			asset: {
				id: '1000',
				name: 'HP Pavilion dv6 laptop',
				description: 'I5 2ng gen laptop'
			},
			graphLinks: [
				{
					_id: '5c63c62bdf01a8158c9afdf7',
					links: {
						usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
						composedOf: []
					},
					timestamp: '2019-02-13T07:14:12.028Z',
					assetModel: 'any',
					tagId: '1012',
					asset: {
						id: '1012',
						name: 'sub asset',
						description: 'sub asset'
					},
					uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c62b91b77894b36bae2475c',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: []
					},
					timestamp: '2019-02-12T12:13:33.953Z',
					tagId: '114',
					asset: {
						id: '1004',
						name: 'Nvidia Graphics MX150 8GB',
						description: 'Nvidia MX150'
					},
					uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: []
						}
					]
				},
				{
					_id: '5c62b8b453f4c836b4f9fa09',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: []
					},
					timestamp: '2019-02-12T12:13:33.905Z',
					tagId: '113',
					asset: {
						id: '1003',
						name: 'Intel i7 cpu',
						description: '8 gen, Quad core'
					},
					uid: 'c7b3d3dc-0588-b266-0110-12d0db43c150',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62b5ecad0f4f34cba6b5d4',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
					},
					timestamp: '2019-02-12T12:02:30.362Z',
					tagId: '112',
					asset: {
						id: '1002',
						name: 'Samsung ddr3 ram 8gb',
						description: 'ddr3'
					},
					uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c63c62bdf01a8158c9afdf7',
							links: {
								usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
								composedOf: []
							},
							timestamp: '2019-02-13T07:14:12.028Z',
							assetModel: 'any',
							tagId: '1012',
							asset: {
								id: '1012',
								name: 'sub asset',
								description: 'sub asset'
							},
							uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							relations: []
						}
					]
				}
			],
			links: {
				usedIn: [
					'a8db0626-028f-03ef-3e60-572988873a41',
					'bd764cf0-c5af-017c-087c-c930e3bd9a5b',
					'a289d350-f44a-6b8e-9316-630803b3ed2f',
					'a74cb15f-c184-b3c5-a67f-7e87e9c9d9f0'
				],
				composedOf: [
					'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
					'c7b3d3dc-0588-b266-0110-12d0db43c150',
					'67e21c29-2712-580f-0e9a-dd96fe24747d'
				]
			},
			relations: [
				{
					_id: '5c62b5ecad0f4f34cba6b5d4',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
					},
					timestamp: '2019-02-12T12:02:30.362Z',
					tagId: '112',
					asset: {
						id: '1002',
						name: 'Samsung ddr3 ram 8gb',
						description: 'ddr3'
					},
					uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c63c62bdf01a8158c9afdf7',
							links: {
								usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
								composedOf: []
							},
							timestamp: '2019-02-13T07:14:12.028Z',
							assetModel: 'any',
							tagId: '1012',
							asset: {
								id: '1012',
								name: 'sub asset',
								description: 'sub asset'
							},
							uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							relations: [
								{
									_id: '5c62b5ecad0f4f34cba6b5d4',
									links: {
										usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
										composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
									},
									timestamp: '2019-02-12T12:02:30.362Z',
									tagId: '112',
									asset: {
										id: '1002',
										name: 'Samsung ddr3 ram 8gb',
										description: 'ddr3'
									},
									uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
									linksInfo: [],
									__v: 0,
									depth: 0,
									relations: [
										{
											_id: '5c63c62bdf01a8158c9afdf7',
											links: {
												usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
												composedOf: []
											},
											timestamp: '2019-02-13T07:14:12.028Z',
											assetModel: 'any',
											tagId: '1012',
											asset: {
												id: '1012',
												name: 'sub asset',
												description: 'sub asset'
											},
											uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 1,
											relations: []
										}
									]
								}
							]
						}
					]
				},
				{
					_id: '5c62b8b453f4c836b4f9fa09',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: []
					},
					timestamp: '2019-02-12T12:13:33.905Z',
					tagId: '113',
					asset: {
						id: '1003',
						name: 'Intel i7 cpu',
						description: '8 gen, Quad core'
					},
					uid: 'c7b3d3dc-0588-b266-0110-12d0db43c150',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c62b5ecad0f4f34cba6b5d4',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
							},
							timestamp: '2019-02-12T12:02:30.362Z',
							tagId: '112',
							asset: {
								id: '1002',
								name: 'Samsung ddr3 ram 8gb',
								description: 'ddr3'
							},
							uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: [
								{
									_id: '5c63c62bdf01a8158c9afdf7',
									links: {
										usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
										composedOf: []
									},
									timestamp: '2019-02-13T07:14:12.028Z',
									assetModel: 'any',
									tagId: '1012',
									asset: {
										id: '1012',
										name: 'sub asset',
										description: 'sub asset'
									},
									uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 1,
									relations: []
								}
							]
						},
						{
							_id: '5c62b5ecad0f4f34cba6b5d4',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
							},
							timestamp: '2019-02-12T12:02:30.362Z',
							tagId: '112',
							asset: {
								id: '1002',
								name: 'Samsung ddr3 ram 8gb',
								description: 'ddr3'
							},
							uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: [
								{
									_id: '5c63c62bdf01a8158c9afdf7',
									links: {
										usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
										composedOf: []
									},
									timestamp: '2019-02-13T07:14:12.028Z',
									assetModel: 'any',
									tagId: '1012',
									asset: {
										id: '1012',
										name: 'sub asset',
										description: 'sub asset'
									},
									uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 1,
									relations: []
								}
							]
						},
						{
							_id: '5c62b5ecad0f4f34cba6b5d4',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
							},
							timestamp: '2019-02-12T12:02:30.362Z',
							tagId: '112',
							asset: {
								id: '1002',
								name: 'Samsung ddr3 ram 8gb',
								description: 'ddr3'
							},
							uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: [
								{
									_id: '5c63c62bdf01a8158c9afdf7',
									links: {
										usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
										composedOf: []
									},
									timestamp: '2019-02-13T07:14:12.028Z',
									assetModel: 'any',
									tagId: '1012',
									asset: {
										id: '1012',
										name: 'sub asset',
										description: 'sub asset'
									},
									uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 1,
									relations: []
								}
							]
						},
						{
							_id: '5c62b5ecad0f4f34cba6b5d4',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: [ '26a8140a-298a-ba45-bba0-07eb046f34e9' ]
							},
							timestamp: '2019-02-12T12:02:30.362Z',
							tagId: '112',
							asset: {
								id: '1002',
								name: 'Samsung ddr3 ram 8gb',
								description: 'ddr3'
							},
							uid: 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: [
								{
									_id: '5c63c62bdf01a8158c9afdf7',
									links: {
										usedIn: [ 'a92359c2-d15f-d7e4-fd4c-10c1f98299b3' ],
										composedOf: []
									},
									timestamp: '2019-02-13T07:14:12.028Z',
									assetModel: 'any',
									tagId: '1012',
									asset: {
										id: '1012',
										name: 'sub asset',
										description: 'sub asset'
									},
									uid: '26a8140a-298a-ba45-bba0-07eb046f34e9',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 1,
									relations: []
								}
							]
						}
					]
				},
				{
					_id: '5c62b91b77894b36bae2475c',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: []
					},
					timestamp: '2019-02-12T12:13:33.953Z',
					tagId: '114',
					asset: {
						id: '1004',
						name: 'Nvidia Graphics MX150 8GB',
						description: 'Nvidia MX150'
					},
					uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62b91b77894b36bae2475c',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: []
					},
					timestamp: '2019-02-12T12:13:33.953Z',
					tagId: '114',
					asset: {
						id: '1004',
						name: 'Nvidia Graphics MX150 8GB',
						description: 'Nvidia MX150'
					},
					uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: []
						},
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: []
						}
					]
				},
				{
					_id: '5c62b91b77894b36bae2475c',
					links: {
						usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
						composedOf: []
					},
					timestamp: '2019-02-12T12:13:33.953Z',
					tagId: '114',
					asset: {
						id: '1004',
						name: 'Nvidia Graphics MX150 8GB',
						description: 'Nvidia MX150'
					},
					uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: []
						},
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: []
						},
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: [
								{
									_id: '5c62b91b77894b36bae2475c',
									links: {
										usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
										composedOf: []
									},
									timestamp: '2019-02-12T12:13:33.953Z',
									tagId: '114',
									asset: {
										id: '1004',
										name: 'Nvidia Graphics MX150 8GB',
										description: 'Nvidia MX150'
									},
									uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
									linksInfo: [],
									__v: 0,
									depth: 0,
									relations: []
								}
							]
						},
						{
							_id: '5c62b91b77894b36bae2475c',
							links: {
								usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
								composedOf: []
							},
							timestamp: '2019-02-12T12:13:33.953Z',
							tagId: '114',
							asset: {
								id: '1004',
								name: 'Nvidia Graphics MX150 8GB',
								description: 'Nvidia MX150'
							},
							uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
							linksInfo: [],
							__v: 0,
							depth: 0,
							relations: [
								{
									_id: '5c62b91b77894b36bae2475c',
									links: {
										usedIn: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ],
										composedOf: []
									},
									timestamp: '2019-02-12T12:13:33.953Z',
									tagId: '114',
									asset: {
										id: '1004',
										name: 'Nvidia Graphics MX150 8GB',
										description: 'Nvidia MX150'
									},
									uid: '67e21c29-2712-580f-0e9a-dd96fe24747d',
									linksInfo: [],
									__v: 0,
									depth: 0,
									relations: []
								}
							]
						}
					]
				}
			],
			depth: -1
		}
	];

	usedIn = [
		{
			uid: '61f11f9e-7040-a5a8-1a90-615c2fde4eda',
			timestamp: '2019-02-18T11:14:31.836Z',
			asset: {
				id: '1035',
				name: 'ssd 11',
				description: 'safas'
			},
			graphLinks: [
				{
					_id: '5c6b9b6da20186237cb2b844',
					links: {
						usedIn: [],
						composedOf: [ 'a5401d12-2b5d-0cb6-4813-237cc6025c8c', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
					},
					timestamp: '2019-02-19T04:31:30.599Z',
					assetModel: 'any',
					asset: {
						id: '1038',
						name: 'SOny note Model 1902',
						description: '16gb ram'
					},
					uid: 'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 3,
					assetName: 'SOny note Model 1902',
					relations: []
				},
				{
					_id: '5c6b9a15a20186237cb2b842',
					links: {
						usedIn: [],
						composedOf: [
							'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
							'231610f3-46fe-a430-fb38-4dcb22dc8383',
							'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
						]
					},
					timestamp: '2019-02-19T04:31:30.599Z',
					assetModel: 'any',
					asset: {
						id: '1037',
						name: 'Hp Model 1602',
						description: '16gb ram'
					},
					uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 3,
					assetName: 'Hp Model 1602',
					relations: []
				},
				{
					_id: '5c67d401373bbf1308176e97',
					links: {
						usedIn: [],
						composedOf: [
							'231610f3-46fe-a430-fb38-4dcb22dc8383',
							'5dc05ec5-0856-dec3-0ef6-d8bf7bab912b',
							'59fc5bd5-eaa1-d586-8191-713ca53ba44b'
						]
					},
					timestamp: '2019-02-16T06:18:45.551Z',
					assetModel: 'any',
					asset: {
						id: '1033',
						name: 'Thinkpad Model 1602',
						description: '16gb ram'
					},
					uid: '49640f04-8710-8c0c-7d4a-767f20ee9306',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 3,
					assetName: 'Thinkpad Model 1602',
					relations: []
				},
				{
					_id: '5c67c6c3373bbf1308176e96',
					links: {
						usedIn: [ '72b2b15a-784b-9c9e-962b-f03917a4ffc0' ],
						composedOf: [ '857cfc8c-c793-8fcf-076e-715c6bec962d', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
					},
					timestamp: '2019-02-16T06:18:45.551Z',
					assetModel: 'any',
					asset: {
						id: '1032',
						name: 'Hp Castro 1602',
						description: '16gb ram'
					},
					uid: '2fcea72c-bce8-0fdf-233e-d8616296d8c8',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 3,
					assetName: 'Hp Castro 1602',
					relations: [
						{
							_id: '5c6b9a15a20186237cb2b842',
							links: {
								usedIn: [],
								composedOf: [
									'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
									'231610f3-46fe-a430-fb38-4dcb22dc8383',
									'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
								]
							},
							timestamp: '2019-02-19T04:31:30.599Z',
							assetModel: 'any',
							asset: {
								id: '1037',
								name: 'Hp Model 1602',
								description: '16gb ram'
							},
							uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 3,
							assetName: 'Hp Model 1602',
							relations: []
						}
					]
				},
				{
					_id: '5c6a9b7a737ff329ec202c78',
					links: {
						usedIn: [ '231610f3-46fe-a430-fb38-4dcb22dc8383' ],
						composedOf: [ '95afd652-7aeb-28e9-b667-167af413d297', '3b8945c3-38ca-a5c7-fcfa-91eb7e23773e' ]
					},
					timestamp: '2019-02-18T11:14:31.836Z',
					assetModel: 'any',
					asset: {
						id: '1036',
						name: 'dell 11',
						description: 'dcsd'
					},
					uid: 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 1,
					assetName: 'dell 11',
					relations: [
						{
							_id: '5c67c03b373bbf1308176e94',
							links: {
								usedIn: [
									'2fcea72c-bce8-0fdf-233e-d8616296d8c8',
									'49640f04-8710-8c0c-7d4a-767f20ee9306',
									'72b2b15a-784b-9c9e-962b-f03917a4ffc0',
									'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3'
								],
								composedOf: [ 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14' ]
							},
							timestamp: '2019-02-16T06:18:45.551Z',
							assetModel: 'any',
							asset: {
								id: '1030',
								name: 'SSDX Model  1602',
								description: '256 gb SSD',
								bidId: '1003',
								transactionId: '1005'
							},
							uid: '231610f3-46fe-a430-fb38-4dcb22dc8383',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 2,
							assetName: 'SSDX Model  1602',
							relations: [
								{
									_id: '5c67c6c3373bbf1308176e96',
									links: {
										usedIn: [ '72b2b15a-784b-9c9e-962b-f03917a4ffc0' ],
										composedOf: [ '857cfc8c-c793-8fcf-076e-715c6bec962d', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
									},
									timestamp: '2019-02-16T06:18:45.551Z',
									assetModel: 'any',
									asset: {
										id: '1032',
										name: 'Hp Castro 1602',
										description: '16gb ram'
									},
									uid: '2fcea72c-bce8-0fdf-233e-d8616296d8c8',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 3,
									assetName: 'Hp Castro 1602',
									relations: [
										{
											_id: '5c6b9a15a20186237cb2b842',
											links: {
												usedIn: [],
												composedOf: [
													'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
													'231610f3-46fe-a430-fb38-4dcb22dc8383',
													'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
												]
											},
											timestamp: '2019-02-19T04:31:30.599Z',
											assetModel: 'any',
											asset: {
												id: '1037',
												name: 'Hp Model 1602',
												description: '16gb ram'
											},
											uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Hp Model 1602',
											relations: []
										}
									]
								},
								{
									_id: '5c67d401373bbf1308176e97',
									links: {
										usedIn: [],
										composedOf: [
											'231610f3-46fe-a430-fb38-4dcb22dc8383',
											'5dc05ec5-0856-dec3-0ef6-d8bf7bab912b',
											'59fc5bd5-eaa1-d586-8191-713ca53ba44b'
										]
									},
									timestamp: '2019-02-16T06:18:45.551Z',
									assetModel: 'any',
									asset: {
										id: '1033',
										name: 'Thinkpad Model 1602',
										description: '16gb ram'
									},
									uid: '49640f04-8710-8c0c-7d4a-767f20ee9306',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 3,
									assetName: 'Thinkpad Model 1602',
									relations: []
								},
								{
									_id: '5c6b9a15a20186237cb2b842',
									links: {
										usedIn: [],
										composedOf: [
											'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
											'231610f3-46fe-a430-fb38-4dcb22dc8383',
											'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
										]
									},
									timestamp: '2019-02-19T04:31:30.599Z',
									assetModel: 'any',
									asset: {
										id: '1037',
										name: 'Hp Model 1602',
										description: '16gb ram'
									},
									uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 3,
									assetName: 'Hp Model 1602',
									relations: []
								},
								{
									_id: '5c6b9b6da20186237cb2b844',
									links: {
										usedIn: [],
										composedOf: [ 'a5401d12-2b5d-0cb6-4813-237cc6025c8c', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
									},
									timestamp: '2019-02-19T04:31:30.599Z',
									assetModel: 'any',
									asset: {
										id: '1038',
										name: 'SOny note Model 1902',
										description: '16gb ram'
									},
									uid: 'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 3,
									assetName: 'SOny note Model 1902',
									relations: []
								}
							]
						}
					]
				},
				{
					_id: '5c67c03b373bbf1308176e94',
					links: {
						usedIn: [
							'2fcea72c-bce8-0fdf-233e-d8616296d8c8',
							'49640f04-8710-8c0c-7d4a-767f20ee9306',
							'72b2b15a-784b-9c9e-962b-f03917a4ffc0',
							'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3'
						],
						composedOf: [ 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14' ]
					},
					timestamp: '2019-02-16T06:18:45.551Z',
					assetModel: 'any',
					asset: {
						id: '1030',
						name: 'SSDX Model  1602',
						description: '256 gb SSD',
						bidId: '1003',
						transactionId: '1005'
					},
					uid: '231610f3-46fe-a430-fb38-4dcb22dc8383',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 2,
					assetName: 'SSDX Model  1602',
					relations: [
						{
							_id: '5c67c6c3373bbf1308176e96',
							links: {
								usedIn: [ '72b2b15a-784b-9c9e-962b-f03917a4ffc0' ],
								composedOf: [ '857cfc8c-c793-8fcf-076e-715c6bec962d', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
							},
							timestamp: '2019-02-16T06:18:45.551Z',
							assetModel: 'any',
							asset: {
								id: '1032',
								name: 'Hp Castro 1602',
								description: '16gb ram'
							},
							uid: '2fcea72c-bce8-0fdf-233e-d8616296d8c8',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 3,
							assetName: 'Hp Castro 1602',
							relations: [
								{
									_id: '5c6b9a15a20186237cb2b842',
									links: {
										usedIn: [],
										composedOf: [
											'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
											'231610f3-46fe-a430-fb38-4dcb22dc8383',
											'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
										]
									},
									timestamp: '2019-02-19T04:31:30.599Z',
									assetModel: 'any',
									asset: {
										id: '1037',
										name: 'Hp Model 1602',
										description: '16gb ram'
									},
									uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 3,
									assetName: 'Hp Model 1602',
									relations: []
								}
							]
						},
						{
							_id: '5c67d401373bbf1308176e97',
							links: {
								usedIn: [],
								composedOf: [
									'231610f3-46fe-a430-fb38-4dcb22dc8383',
									'5dc05ec5-0856-dec3-0ef6-d8bf7bab912b',
									'59fc5bd5-eaa1-d586-8191-713ca53ba44b'
								]
							},
							timestamp: '2019-02-16T06:18:45.551Z',
							assetModel: 'any',
							asset: {
								id: '1033',
								name: 'Thinkpad Model 1602',
								description: '16gb ram'
							},
							uid: '49640f04-8710-8c0c-7d4a-767f20ee9306',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 3,
							assetName: 'Thinkpad Model 1602',
							relations: []
						},
						{
							_id: '5c6b9a15a20186237cb2b842',
							links: {
								usedIn: [],
								composedOf: [
									'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
									'231610f3-46fe-a430-fb38-4dcb22dc8383',
									'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
								]
							},
							timestamp: '2019-02-19T04:31:30.599Z',
							assetModel: 'any',
							asset: {
								id: '1037',
								name: 'Hp Model 1602',
								description: '16gb ram'
							},
							uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 3,
							assetName: 'Hp Model 1602',
							relations: []
						},
						{
							_id: '5c6b9b6da20186237cb2b844',
							links: {
								usedIn: [],
								composedOf: [ 'a5401d12-2b5d-0cb6-4813-237cc6025c8c', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
							},
							timestamp: '2019-02-19T04:31:30.599Z',
							assetModel: 'any',
							asset: {
								id: '1038',
								name: 'SOny note Model 1902',
								description: '16gb ram'
							},
							uid: 'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 3,
							assetName: 'SOny note Model 1902',
							relations: []
						}
					]
				},
				{
					_id: '5c6a992a737ff329ec202c74',
					links: {
						usedIn: [ 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14' ],
						composedOf: [
							'a4ce7289-0887-f090-dfe8-0c59827b4dcf',
							'61f11f9e-7040-a5a8-1a90-615c2fde4eda',
							'857cfc8c-c793-8fcf-076e-715c6bec962d'
						]
					},
					timestamp: '2019-02-18T11:14:31.836Z',
					assetModel: 'any',
					asset: {
						id: '1034',
						name: 'ram 11',
						description: 'fsfda',
						bidId: '1004',
						transactionId: '1006'
					},
					uid: '3b8945c3-38ca-a5c7-fcfa-91eb7e23773e',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 0,
					assetName: 'ram 11',
					relations: [
						{
							_id: '5c6a9b7a737ff329ec202c78',
							links: {
								usedIn: [ '231610f3-46fe-a430-fb38-4dcb22dc8383' ],
								composedOf: [ '95afd652-7aeb-28e9-b667-167af413d297', '3b8945c3-38ca-a5c7-fcfa-91eb7e23773e' ]
							},
							timestamp: '2019-02-18T11:14:31.836Z',
							assetModel: 'any',
							asset: {
								id: '1036',
								name: 'dell 11',
								description: 'dcsd'
							},
							uid: 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							assetName: 'dell 11',
							relations: [
								{
									_id: '5c67c03b373bbf1308176e94',
									links: {
										usedIn: [
											'2fcea72c-bce8-0fdf-233e-d8616296d8c8',
											'49640f04-8710-8c0c-7d4a-767f20ee9306',
											'72b2b15a-784b-9c9e-962b-f03917a4ffc0',
											'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3'
										],
										composedOf: [ 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14' ]
									},
									timestamp: '2019-02-16T06:18:45.551Z',
									assetModel: 'any',
									asset: {
										id: '1030',
										name: 'SSDX Model  1602',
										description: '256 gb SSD',
										bidId: '1003',
										transactionId: '1005'
									},
									uid: '231610f3-46fe-a430-fb38-4dcb22dc8383',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 2,
									assetName: 'SSDX Model  1602',
									relations: [
										{
											_id: '5c67c6c3373bbf1308176e96',
											links: {
												usedIn: [ '72b2b15a-784b-9c9e-962b-f03917a4ffc0' ],
												composedOf: [ '857cfc8c-c793-8fcf-076e-715c6bec962d', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
											},
											timestamp: '2019-02-16T06:18:45.551Z',
											assetModel: 'any',
											asset: {
												id: '1032',
												name: 'Hp Castro 1602',
												description: '16gb ram'
											},
											uid: '2fcea72c-bce8-0fdf-233e-d8616296d8c8',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Hp Castro 1602',
											relations: [
												{
													_id: '5c6b9a15a20186237cb2b842',
													links: {
														usedIn: [],
														composedOf: [
															'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
															'231610f3-46fe-a430-fb38-4dcb22dc8383',
															'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
														]
													},
													timestamp: '2019-02-19T04:31:30.599Z',
													assetModel: 'any',
													asset: {
														id: '1037',
														name: 'Hp Model 1602',
														description: '16gb ram'
													},
													uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
													linksInfo: [],
													location: [],
													__v: 0,
													depth: 3,
													assetName: 'Hp Model 1602',
													relations: []
												}
											]
										},
										{
											_id: '5c67d401373bbf1308176e97',
											links: {
												usedIn: [],
												composedOf: [
													'231610f3-46fe-a430-fb38-4dcb22dc8383',
													'5dc05ec5-0856-dec3-0ef6-d8bf7bab912b',
													'59fc5bd5-eaa1-d586-8191-713ca53ba44b'
												]
											},
											timestamp: '2019-02-16T06:18:45.551Z',
											assetModel: 'any',
											asset: {
												id: '1033',
												name: 'Thinkpad Model 1602',
												description: '16gb ram'
											},
											uid: '49640f04-8710-8c0c-7d4a-767f20ee9306',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Thinkpad Model 1602',
											relations: []
										},
										{
											_id: '5c6b9a15a20186237cb2b842',
											links: {
												usedIn: [],
												composedOf: [
													'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
													'231610f3-46fe-a430-fb38-4dcb22dc8383',
													'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
												]
											},
											timestamp: '2019-02-19T04:31:30.599Z',
											assetModel: 'any',
											asset: {
												id: '1037',
												name: 'Hp Model 1602',
												description: '16gb ram'
											},
											uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Hp Model 1602',
											relations: []
										},
										{
											_id: '5c6b9b6da20186237cb2b844',
											links: {
												usedIn: [],
												composedOf: [ 'a5401d12-2b5d-0cb6-4813-237cc6025c8c', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
											},
											timestamp: '2019-02-19T04:31:30.599Z',
											assetModel: 'any',
											asset: {
												id: '1038',
												name: 'SOny note Model 1902',
												description: '16gb ram'
											},
											uid: 'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'SOny note Model 1902',
											relations: []
										}
									]
								}
							]
						}
					]
				}
			],
			links: {
				usedIn: [ '3b8945c3-38ca-a5c7-fcfa-91eb7e23773e' ],
				composedOf: [ '95afd652-7aeb-28e9-b667-167af413d297' ]
			},
			assetName: 'ssd 11',
			relations: [
				{
					_id: '5c6a992a737ff329ec202c74',
					links: {
						usedIn: [ 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14' ],
						composedOf: [
							'a4ce7289-0887-f090-dfe8-0c59827b4dcf',
							'61f11f9e-7040-a5a8-1a90-615c2fde4eda',
							'857cfc8c-c793-8fcf-076e-715c6bec962d'
						]
					},
					timestamp: '2019-02-18T11:14:31.836Z',
					assetModel: 'any',
					asset: {
						id: '1034',
						name: 'ram 11',
						description: 'fsfda',
						bidId: '1004',
						transactionId: '1006'
					},
					uid: '3b8945c3-38ca-a5c7-fcfa-91eb7e23773e',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 0,
					assetName: 'ram 11',
					relations: [
						{
							_id: '5c6a9b7a737ff329ec202c78',
							links: {
								usedIn: [ '231610f3-46fe-a430-fb38-4dcb22dc8383' ],
								composedOf: [ '95afd652-7aeb-28e9-b667-167af413d297', '3b8945c3-38ca-a5c7-fcfa-91eb7e23773e' ]
							},
							timestamp: '2019-02-18T11:14:31.836Z',
							assetModel: 'any',
							asset: {
								id: '1036',
								name: 'dell 11',
								description: 'dcsd'
							},
							uid: 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							assetName: 'dell 11',
							relations: [
								{
									_id: '5c67c03b373bbf1308176e94',
									links: {
										usedIn: [
											'2fcea72c-bce8-0fdf-233e-d8616296d8c8',
											'49640f04-8710-8c0c-7d4a-767f20ee9306',
											'72b2b15a-784b-9c9e-962b-f03917a4ffc0',
											'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3'
										],
										composedOf: [ 'e370ae7b-567f-f4b5-5ee2-9a03fac6ce14' ]
									},
									timestamp: '2019-02-16T06:18:45.551Z',
									assetModel: 'any',
									asset: {
										id: '1030',
										name: 'SSDX Model  1602',
										description: '256 gb SSD',
										bidId: '1003',
										transactionId: '1005'
									},
									uid: '231610f3-46fe-a430-fb38-4dcb22dc8383',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 2,
									assetName: 'SSDX Model  1602',
									relations: [
										{
											_id: '5c67c6c3373bbf1308176e96',
											links: {
												usedIn: [ '72b2b15a-784b-9c9e-962b-f03917a4ffc0' ],
												composedOf: [ '857cfc8c-c793-8fcf-076e-715c6bec962d', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
											},
											timestamp: '2019-02-16T06:18:45.551Z',
											assetModel: 'any',
											asset: {
												id: '1032',
												name: 'Hp Castro 1602',
												description: '16gb ram'
											},
											uid: '2fcea72c-bce8-0fdf-233e-d8616296d8c8',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Hp Castro 1602',
											relations: [
												{
													_id: '5c6b9a15a20186237cb2b842',
													links: {
														usedIn: [],
														composedOf: [
															'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
															'231610f3-46fe-a430-fb38-4dcb22dc8383',
															'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
														]
													},
													timestamp: '2019-02-19T04:31:30.599Z',
													assetModel: 'any',
													asset: {
														id: '1037',
														name: 'Hp Model 1602',
														description: '16gb ram'
													},
													uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
													linksInfo: [],
													location: [],
													__v: 0,
													depth: 3,
													assetName: 'Hp Model 1602',
													relations: []
												}
											]
										},
										{
											_id: '5c67d401373bbf1308176e97',
											links: {
												usedIn: [],
												composedOf: [
													'231610f3-46fe-a430-fb38-4dcb22dc8383',
													'5dc05ec5-0856-dec3-0ef6-d8bf7bab912b',
													'59fc5bd5-eaa1-d586-8191-713ca53ba44b'
												]
											},
											timestamp: '2019-02-16T06:18:45.551Z',
											assetModel: 'any',
											asset: {
												id: '1033',
												name: 'Thinkpad Model 1602',
												description: '16gb ram'
											},
											uid: '49640f04-8710-8c0c-7d4a-767f20ee9306',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Thinkpad Model 1602',
											relations: []
										},
										{
											_id: '5c6b9a15a20186237cb2b842',
											links: {
												usedIn: [],
												composedOf: [
													'e01d6fb8-59c5-bd50-9518-cad3576c2fa7',
													'231610f3-46fe-a430-fb38-4dcb22dc8383',
													'2fcea72c-bce8-0fdf-233e-d8616296d8c8'
												]
											},
											timestamp: '2019-02-19T04:31:30.599Z',
											assetModel: 'any',
											asset: {
												id: '1037',
												name: 'Hp Model 1602',
												description: '16gb ram'
											},
											uid: '72b2b15a-784b-9c9e-962b-f03917a4ffc0',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'Hp Model 1602',
											relations: []
										},
										{
											_id: '5c6b9b6da20186237cb2b844',
											links: {
												usedIn: [],
												composedOf: [ 'a5401d12-2b5d-0cb6-4813-237cc6025c8c', '231610f3-46fe-a430-fb38-4dcb22dc8383' ]
											},
											timestamp: '2019-02-19T04:31:30.599Z',
											assetModel: 'any',
											asset: {
												id: '1038',
												name: 'SOny note Model 1902',
												description: '16gb ram'
											},
											uid: 'faa27ca8-e0ea-e29d-bbc9-3f9c776f34e3',
											linksInfo: [],
											location: [],
											__v: 0,
											depth: 3,
											assetName: 'SOny note Model 1902',
											relations: []
										}
									]
								}
							]
						}
					]
				}
			],
			depth: -1
		}
	];
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

	constructor() {
		const imageUrl =
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuon9Cl1lIwDhwfwdNxTAa-H3b0dhuMUt6NdxchZz4bO4yZ2A';
		this.getBase64ImageFromURL(imageUrl).subscribe((base64data) => {
			this.base64Image = 'data:image/jpg;base64,' + base64data;
		});
		this.action(1);
	}

	action(e) {
		console.log('data', e);
		this.relation = e;
		if (e == 0) {
			this.response = this.usedIn;
		}
		if (e == 1) {
			this.response = this.usedIn;
		}
	}

	getBase64ImageFromURL(url: string) {
		return Observable.create((observer: Observer<string>) => {
			const img = new Image();
			img.crossOrigin = 'Anonymous';
			img.src = url;
			img.src = url;
			if (!img.complete) {
				img.onload = () => {
					observer.next(this.getBase64Image(img));
					observer.complete();
				};
				img.onerror = (err) => {
					observer.error(err);
				};
			} else {
				observer.next(this.getBase64Image(img));
				observer.complete();
			}
		});
	}

	getBase64Image(img: HTMLImageElement) {
		const canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		const dataURL = canvas.toDataURL('image/png');
		console.log(dataURL);
		return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
	}

	download() {
		const data = document.getElementById('treedata');
		html2canvas(data).then((canvas) => {
			const imgWidth = 208;
			const pageHeight = 150;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			const heightLeft = imgHeight;
			const contentDataURL = canvas.toDataURL('image/png');
			const downloadLink = document.createElement('a');
			downloadLink.href = contentDataURL;
			downloadLink.download = 'product-trace-tree.png';
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		});
	}

	downloadPdf() {
		const data = <SVGSVGElement>(<unknown>document.getElementById('treedata'));
		console.log('response', '<p>' + data + '</p>');

		html2canvas(data).then((canvas) => {
			const imgWidth = 208;
			const pageHeight = 150;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			const heightLeft = imgHeight;
			const contentDataURL = canvas.toDataURL('image/png');
			const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
			const position = 0;
			pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
			const pdfFile = 'product-trace-tree.pdf';
			pdf.save(pdfFile); // Generated PDF
		});
	}

	public print() {
		const data = document.getElementById('treedata');
		html2canvas(data).then((canvas) => {
			// Few necessary setting options
			const imgWidth = 208;
			const pageHeight = 150;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			const heightLeft = imgHeight;
			const contentDataURL = canvas.toDataURL('image/png');
			const dataVal = '<img src=" ' + contentDataURL + '">';
			const WinPrint = window.open('', '', 'left=0,top=0,width=384,height=900,toolbar=0,scrollbars=0,status=0');
			WinPrint.document.write('<html><head>');
			WinPrint.document.write('<link rel="stylesheet" href="assets/css/print/normalize.css">');
			WinPrint.document.write('<link rel="stylesheet" href="assets/css/print/receipt.css">');
			WinPrint.document.write('</head><body>');
			WinPrint.document.write('<img src=" ' + contentDataURL + '">');
			WinPrint.document.write('</body></html>');
			WinPrint.document.close();
			WinPrint.print();
			WinPrint.focus();
		});
	}
}
