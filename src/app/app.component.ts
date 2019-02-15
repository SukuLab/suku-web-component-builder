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
	title = 'suku-lib';
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
			uid: '88c172bf-8c62-5c3d-8c70-59ca36b0a7f5',
			timestamp: '2019-02-15T17:59:18.142Z',
			asset: {
				name: 'DDR4',
				description: 'external po asset',
				transactionId: '5654',
				txnDate: '2019-01-31T18:30:00.000Z',
				lotNumber: 21654,
				qty: 100
			},
			graphLinks: [
				{
					_id: '5c66fe9972cf280047c605ff',
					links: {
						usedIn: [],
						composedOf: [
							'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
							'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
							'9325590b-33ad-29dc-2aa1-89a80b0831b9',
							'9627c43d-d9e6-992d-a542-679b8feff45c'
						]
					},
					timestamp: '2019-02-15T17:59:18.142Z',
					assetModel: 'any',
					asset: {
						id: '1277',
						name: 'Dell Laptop ',
						description:
							'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
					},
					uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 1,
					assetName: 'Dell Laptop ',
					relations: []
				},
				{
					_id: '5c66feb972cf280047c60600',
					links: {
						usedIn: [ 'b2a32a00-f338-99ce-67f0-9422e36c7962' ],
						composedOf: [ '88c172bf-8c62-5c3d-8c70-59ca36b0a7f5' ]
					},
					timestamp: '2019-02-15T17:59:18.142Z',
					assetModel: 'externalPO',
					asset: {
						name: 'DDR1',
						description: 'external po asset',
						transactionId: '56165',
						txnDate: '2019-01-31T18:30:00.000Z',
						lotNumber: 216516,
						qty: 100
					},
					uid: 'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 0,
					assetName: 'DDR1',
					relations: [
						{
							_id: '5c66fe9972cf280047c605ff',
							links: {
								usedIn: [],
								composedOf: [
									'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
									'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
									'9325590b-33ad-29dc-2aa1-89a80b0831b9',
									'9627c43d-d9e6-992d-a542-679b8feff45c'
								]
							},
							timestamp: '2019-02-15T17:59:18.142Z',
							assetModel: 'any',
							asset: {
								id: '1277',
								name: 'Dell Laptop ',
								description:
									'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
							},
							uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							assetName: 'Dell Laptop ',
							relations: []
						}
					]
				}
			],
			links: { usedIn: [ 'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc' ], composedOf: [] },
			assetName: 'DDR4',
			relations: [
				{
					_id: '5c66feb972cf280047c60600',
					links: {
						usedIn: [ 'b2a32a00-f338-99ce-67f0-9422e36c7962' ],
						composedOf: [ '88c172bf-8c62-5c3d-8c70-59ca36b0a7f5' ]
					},
					timestamp: '2019-02-15T17:59:18.142Z',
					assetModel: 'externalPO',
					asset: {
						name: 'DDR1',
						description: 'external po asset',
						transactionId: '56165',
						txnDate: '2019-01-31T18:30:00.000Z',
						lotNumber: 216516,
						qty: 100
					},
					uid: 'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 0,
					assetName: 'DDR1',
					relations: [
						{
							_id: '5c66fe9972cf280047c605ff',
							links: {
								usedIn: [],
								composedOf: [
									'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
									'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
									'9325590b-33ad-29dc-2aa1-89a80b0831b9',
									'9627c43d-d9e6-992d-a542-679b8feff45c'
								]
							},
							timestamp: '2019-02-15T17:59:18.142Z',
							assetModel: 'any',
							asset: {
								id: '1277',
								name: 'Dell Laptop ',
								description:
									'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
							},
							uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							assetName: 'Dell Laptop ',
							relations: []
						},{
							_id: '5c66fe9972cf280047c605ff',
							links: {
								usedIn: [],
								composedOf: [
									'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
									'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
									'9325590b-33ad-29dc-2aa1-89a80b0831b9',
									'9627c43d-d9e6-992d-a542-679b8feff45c'
								]
							},
							timestamp: '2019-02-15T17:59:18.142Z',
							assetModel: 'any',
							asset: {
								id: '1277',
								name: 'Dell Laptop ',
								description:
									'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
							},
							uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
							linksInfo: [],
							location: [],
							__v: 0,
							depth: 1,
							assetName: 'Dell Laptop ',
							relations: [{
								_id: '5c66fe9972cf280047c605ff',
								links: {
									usedIn: [],
									composedOf: [
										'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
										'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
										'9325590b-33ad-29dc-2aa1-89a80b0831b9',
										'9627c43d-d9e6-992d-a542-679b8feff45c'
									]
								},
								timestamp: '2019-02-15T17:59:18.142Z',
								assetModel: 'any',
								asset: {
									id: '1277',
									name: 'Dell Laptop ',
									description:
										'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
								},
								uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
								linksInfo: [],
								location: [],
								__v: 0,
								depth: 1,
								assetName: 'Dell Laptop ',
								relations: [{
									_id: '5c66fe9972cf280047c605ff',
									links: {
										usedIn: [],
										composedOf: [
											'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
											'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
											'9325590b-33ad-29dc-2aa1-89a80b0831b9',
											'9627c43d-d9e6-992d-a542-679b8feff45c'
										]
									},
									timestamp: '2019-02-15T17:59:18.142Z',
									assetModel: 'any',
									asset: {
										id: '1277',
										name: 'Dell Laptop ',
										description:
											'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
									},
									uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
									linksInfo: [],
									location: [],
									__v: 0,
									depth: 1,
									assetName: 'Dell Laptop ',
									relations: [{
										_id: '5c66fe9972cf280047c605ff',
										links: {
											usedIn: [],
											composedOf: [
												'c3f4c2cd-7e41-e409-9dcf-411b7175dbdc',
												'2eee9268-0621-c3a0-dfa0-b6995c1f9672',
												'9325590b-33ad-29dc-2aa1-89a80b0831b9',
												'9627c43d-d9e6-992d-a542-679b8feff45c'
											]
										},
										timestamp: '2019-02-15T17:59:18.142Z',
										assetModel: 'any',
										asset: {
											id: '1277',
											name: 'Dell Laptop ',
											description:
												'\nProcessor\nUp to 8th Generation Intel® Core™ i7-8550U Processor\nOperating System\nUp to Windows 10 Home Plus Single Language\nVideo Card\nUp to Intel® UHD Graphics 620\nDisplay\nUp to 13.3-in. touch display\nHard Drive\nUp to 512GB PCIe Solid State Drive\nMemory\nUp to 16GB LPDDR3 2133MHz\n\n'
										},
										uid: 'b2a32a00-f338-99ce-67f0-9422e36c7962',
										linksInfo: [],
										location: [],
										__v: 0,
										depth: 1,
										assetName: 'Dell Laptop ',
										relations: []
									}]
								}]
							}]
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
