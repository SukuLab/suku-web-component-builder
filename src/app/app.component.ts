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
					relations: [	{
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
					}]
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
							relations: [{
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
							}]
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
					relations: [{
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
					}]
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
					relations: [{
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
					},{
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
					}]
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
					relations: [{
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
					},{
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
						relations: [{
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
						}]
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
						relations: [{
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
						}]
					}]
				}
			],
			depth: -1
		}
	];
	usedIn = [
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
					_id: '5c63ba81370ed30ec707bc2b',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-13T06:33:09.359Z',
					assetModel: 'any',
					tagId: '996',
					asset: {
						id: '96',
						name: 'Laptop Batch4',
						description: 'Batch4'
					},
					uid: 'a74cb15f-c184-b3c5-a67f-7e87e9c9d9f0',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62c2b98618aa39899f5e08',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-12T12:55:25.600Z',
					tagId: '98',
					asset: {
						id: '998',
						name: 'Laptop Batch2',
						description: 'Batch2'
					},
					uid: 'bd764cf0-c5af-017c-087c-c930e3bd9a5b',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62c2cacc058f39838175d7',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-12T12:55:25.761Z',
					tagId: '99',
					asset: {
						id: '999',
						name: 'Laptop Batch3',
						description: 'Batch3'
					},
					uid: 'a289d350-f44a-6b8e-9316-630803b3ed2f',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62c26f7164663997d79713',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-12T12:55:25.323Z',
					tagId: '97',
					asset: {
						id: '997',
						name: 'Laptop Batch1',
						description: 'Batch1'
					},
					uid: 'a8db0626-028f-03ef-3e60-572988873a41',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
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
					_id: '5c62c26f7164663997d79713',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-12T12:55:25.323Z',
					tagId: '97',
					asset: {
						id: '997',
						name: 'Laptop Batch1',
						description: 'Batch1'
					},
					uid: 'a8db0626-028f-03ef-3e60-572988873a41',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62c2b98618aa39899f5e08',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-12T12:55:25.600Z',
					tagId: '98',
					asset: {
						id: '998',
						name: 'Laptop Batch2',
						description: 'Batch2'
					},
					uid: 'bd764cf0-c5af-017c-087c-c930e3bd9a5b',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c62c2cacc058f39838175d7',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-12T12:55:25.761Z',
					tagId: '99',
					asset: {
						id: '999',
						name: 'Laptop Batch3',
						description: 'Batch3'
					},
					uid: 'a289d350-f44a-6b8e-9316-630803b3ed2f',
					linksInfo: [],
					__v: 0,
					depth: 0,
					relations: []
				},
				{
					_id: '5c63ba81370ed30ec707bc2b',
					links: {
						usedIn: [],
						composedOf: [ '1065cbf6-46e2-ea12-3095-14e6bc8208ad' ]
					},
					timestamp: '2019-02-13T06:33:09.359Z',
					assetModel: 'any',
					tagId: '996',
					asset: {
						id: '96',
						name: 'Laptop Batch4',
						description: 'Batch4'
					},
					uid: 'a74cb15f-c184-b3c5-a67f-7e87e9c9d9f0',
					linksInfo: [],
					location: [],
					__v: 0,
					depth: 0,
					relations: []
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
			this.response = this.composedOf;
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
