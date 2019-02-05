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
	treeDataApi = [
		{
			uid: 'Lx1000',
			timestamp: '2019-01-21T11:41:31.921Z',
			product: {
				id: '1000',
				name: 'HP Pavilion DV6 dual core HP Pavilion DV6 dual core  ',
				description: 'HP Laptop'
			},
			parent: '',
			children: [ 'Lx1001', 'Lx2000' ],
			graphLinks: [
				{
					_id: '5c45c0a07bccff62b4c83e63',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1008',
					product: {
						id: '1008',
						name: 'Fan Speed Controller Board',
						description: 'Motor Board'
					},
					links: [
						{
							_id: '5c45c0a07bccff62b4c83e64',
							uid: 'Lx1005',
							type: 'usedIn'
						}
					],
					parent: 'Lx1005',
					__v: 0,
					depth: 3,
					relations: []
				},
				{
					_id: '5c45bf897bccff62b4c83e54',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [ 'Lx1004', 'Lx1005' ],
					uid: 'Lx1003',
					product: {
						id: '1003',
						name: 'Intel CPU Cooler dual core',
						description: 'CPU Cooler'
					},
					links: [
						{
							_id: '5c45bf897bccff62b4c83e55',
							uid: 'Lx1001',
							type: 'usedIn'
						},
						{
							_id: '5c45bfc47bccff62b4c83e59',
							uid: 'Lx1004',
							type: 'composedOf'
						},
						{
							_id: '5c45bfe67bccff62b4c83e5c',
							uid: 'Lx1005',
							type: 'composedOf'
						}
					],
					parent: 'Lx1001',
					__v: 0,
					depth: 1,
					relations: [
						{
							_id: '5c45bfc47bccff62b4c83e57',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1004',
							product: {
								id: '1004',
								name: 'CPU HeatSink',
								description: 'HeatSink'
							},
							links: [
								{
									_id: '5c45bfc47bccff62b4c83e58',
									uid: 'Lx1003',
									type: 'usedIn'
								}
							],
							parent: 'Lx1003',
							__v: 0,
							depth: 2,
							relations: []
						}
					]
				},
				{
					_id: '5c45bf6a7bccff62b4c83e51',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1002',
					product: {
						id: '1002',
						name: 'Intel I5 CPU Chip dual core',
						description: 'CPU Chip'
					},
					links: [
						{
							_id: '5c45bf6a7bccff62b4c83e52',
							uid: 'Lx1001',
							type: 'usedIn'
						}
					],
					parent: 'Lx1001',
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c45b8d37bccff62b4c83e4e',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [ 'Lx1002', 'Lx1003' ],
					uid: 'Lx1001',
					product: {
						id: '1001',
						name: 'Intel I5 CPU Chip dual core',
						description: 'HP Laptop'
					},
					links: [
						{
							_id: '5c45b8d37bccff62b4c83e4f',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45bf6b7bccff62b4c83e53',
							uid: 'Lx1002',
							type: 'composedOf'
						},
						{
							_id: '5c45bf8a7bccff62b4c83e56',
							uid: 'Lx1003',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45bf6a7bccff62b4c83e51',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1002',
							product: {
								id: '1002',
								name: 'Intel I5 CPU Chip Chip dual core',
								description: 'CPU Chip'
							},
							links: [
								{
									_id: '5c45bf6a7bccff62b4c83e52',
									uid: 'Lx1001',
									type: 'usedIn'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45bf897bccff62b4c83e54',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [ 'Lx1004', 'Lx1005' ],
							uid: 'Lx1003',
							product: {
								id: '1003',
								name: 'Intel CPU Cooler Chip dual core',
								description: 'CPU Cooler'
							},
							links: [
								{
									_id: '5c45bf897bccff62b4c83e55',
									uid: 'Lx1001',
									type: 'usedIn'
								},
								{
									_id: '5c45bfc47bccff62b4c83e59',
									uid: 'Lx1004',
									type: 'composedOf'
								},
								{
									_id: '5c45bfe67bccff62b4c83e5c',
									uid: 'Lx1005',
									type: 'composedOf'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: [
								{
									_id: '5c45bfc47bccff62b4c83e57',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: [],
									uid: 'Lx1004',
									product: {
										id: '1004',
										name: 'CPU HeatSink Chip dual core',
										description: 'HeatSink'
									},
									links: [
										{
											_id: '5c45bfc47bccff62b4c83e58',
											uid: 'Lx1003',
											type: 'usedIn'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c45bfe67bccff62b4c83e5a',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: [ 'Lx1006', 'Lx1007', 'Lx1008' ],
									uid: 'Lx1005',
									product: {
										id: '1005',
										name: 'CPU CPU Chip dual core',
										description: 'Fan'
									},
									links: [
										{
											_id: '5c45bfe67bccff62b4c83e5b',
											uid: 'Lx1003',
											type: 'usedIn'
										},
										{
											_id: '5c45c0177bccff62b4c83e5f',
											uid: 'Lx1006',
											type: 'composedOf'
										},
										{
											_id: '5c45c0657bccff62b4c83e62',
											uid: 'Lx1007',
											type: 'composedOf'
										},
										{
											_id: '5c45c0a07bccff62b4c83e65',
											uid: 'Lx1008',
											type: 'composedOf'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: [
										{
											_id: '5c45c0177bccff62b4c83e5d',
											timestamp: '2019-01-21T11:41:31.921Z',
											children: [],
											uid: 'Lx1006',
											product: {
												id: '1006',
												name: 'Fan Blade CPU Chip dual core',
												description: 'Fan Blade'
											},
											links: [
												{
													_id: '5c45c0177bccff62b4c83e5e',
													uid: 'Lx1005',
													type: 'usedIn'
												}
											],
											parent: 'Lx1005',
											__v: 0,
											depth: 3,
											relations: []
										},
										{
											_id: '5c45c0647bccff62b4c83e60',
											timestamp: '2019-01-21T11:41:31.921Z',
											children: [],
											uid: 'Lx1007',
											product: {
												id: '1007',
												name: 'Brushless DC Motor',
												description: 'DC Motor'
											},
											links: [
												{
													_id: '5c45c0647bccff62b4c83e61',
													uid: 'Lx1005',
													type: 'usedIn'
												}
											],
											parent: 'Lx1005',
											__v: 0,
											depth: 3,
											relations: []
										},
										{
											_id: '5c45c0a07bccff62b4c83e63',
											timestamp: '2019-01-21T11:41:31.921Z',
											children: [],
											uid: 'Lx1008',
											product: {
												id: '1008',
												name: 'Fan Speed Controller Board',
												description: 'Motor Board'
											},
											links: [
												{
													_id: '5c45c0a07bccff62b4c83e64',
													uid: 'Lx1005',
													type: 'usedIn'
												}
											],
											parent: 'Lx1005',
											__v: 0,
											depth: 3,
											relations: []
										}
									]
								}
							]
						}
					]
				},
				{
					_id: '5c45c1ba7bccff62b4c83e66',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [ 'Lx2001', 'Lx2002' ],
					uid: 'Lx2000',
					product: {
						id: '2000',
						name: 'WD HDD 1B CPU Chip dual core',
						description: 'Western Digital Darddisk'
					},
					links: [
						{
							_id: '5c45c1ba7bccff62b4c83e67',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45c3777bccff62b4c83e6b',
							uid: 'Lx2001',
							type: 'composedOf'
						},
						{
							_id: '5c45c3a87bccff62b4c83e6e',
							uid: 'Lx2002',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45c3777bccff62b4c83e69',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2001',
							product: {
								id: '2001',
								name: 'Platter CPU Chip dual core',
								description: 'platter Disk'
							},
							links: [
								{
									_id: '5c45c3777bccff62b4c83e6a',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45c3a87bccff62b4c83e6c',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2002',
							product: {
								id: '2002',
								name: 'RW Arm assembly CPU Chip dual core',
								description: 'RW Arm assembly'
							},
							links: [
								{
									_id: '5c45c3a87bccff62b4c83e6d',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						}
					]
				},
				{
					_id: '5c45c3a87bccff62b4c83e6c',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx2002',
					product: {
						id: '2002',
						name: 'RW Arm assembly',
						description: 'RW Arm assembly'
					},
					links: [
						{
							_id: '5c45c3a87bccff62b4c83e6d',
							uid: 'Lx2000',
							type: 'usedIn'
						}
					],
					parent: 'Lx2000',
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c45c3777bccff62b4c83e69',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx2001',
					product: {
						id: '2001',
						name: 'Platter',
						description: 'platter Disk'
					},
					links: [
						{
							_id: '5c45c3777bccff62b4c83e6a',
							uid: 'Lx2000',
							type: 'usedIn'
						}
					],
					parent: 'Lx2000',
					__v: 0,
					depth: 1,
					relations: []
				},
				{
					_id: '5c45bfc47bccff62b4c83e57',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1004',
					product: {
						id: '1004',
						name: 'CPU HeatSink CPU Chip dual core',
						description: 'HeatSink'
					},
					links: [
						{
							_id: '5c45bfc47bccff62b4c83e58',
							uid: 'Lx1003',
							type: 'usedIn'
						}
					],
					parent: 'Lx1003',
					__v: 0,
					depth: 2,
					relations: []
				},
				{
					_id: '5c45c0647bccff62b4c83e60',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1007',
					product: {
						id: '1007',
						name: 'Brushless DC Motor',
						description: 'DC Motor'
					},
					links: [
						{
							_id: '5c45c0647bccff62b4c83e61',
							uid: 'Lx1005',
							type: 'usedIn'
						}
					],
					parent: 'Lx1005',
					__v: 0,
					depth: 3,
					relations: []
				},
				{
					_id: '5c45bfe67bccff62b4c83e5a',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [ 'Lx1006', 'Lx1007', 'Lx1008' ],
					uid: 'Lx1005',
					product: {
						id: '1005',
						name: 'CPU Fan',
						description: 'Fan'
					},
					links: [
						{
							_id: '5c45bfe67bccff62b4c83e5b',
							uid: 'Lx1003',
							type: 'usedIn'
						},
						{
							_id: '5c45c0177bccff62b4c83e5f',
							uid: 'Lx1006',
							type: 'composedOf'
						},
						{
							_id: '5c45c0657bccff62b4c83e62',
							uid: 'Lx1007',
							type: 'composedOf'
						},
						{
							_id: '5c45c0a07bccff62b4c83e65',
							uid: 'Lx1008',
							type: 'composedOf'
						}
					],
					parent: 'Lx1003',
					__v: 0,
					depth: 2,
					relations: [
						{
							_id: '5c45c0177bccff62b4c83e5d',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1006',
							product: {
								id: '1006',
								name: 'Fan Blade CPU Chip dual core',
								description: 'Fan Blade'
							},
							links: [
								{
									_id: '5c45c0177bccff62b4c83e5e',
									uid: 'Lx1005',
									type: 'usedIn'
								}
							],
							parent: 'Lx1005',
							__v: 0,
							depth: 3,
							relations: []
						},
						{
							_id: '5c45c0647bccff62b4c83e60',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1007',
							product: {
								id: '1007',
								name: 'Brushless DC Motor',
								description: 'DC Motor'
							},
							links: [
								{
									_id: '5c45c0647bccff62b4c83e61',
									uid: 'Lx1005',
									type: 'usedIn'
								}
							],
							parent: 'Lx1005',
							__v: 0,
							depth: 3,
							relations: []
						},
						{
							_id: '5c45c0a07bccff62b4c83e63',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1008',
							product: {
								id: '1008',
								name: 'Fan Speed Controller Board',
								description: 'Motor Board'
							},
							links: [
								{
									_id: '5c45c0a07bccff62b4c83e64',
									uid: 'Lx1005',
									type: 'usedIn'
								}
							],
							parent: 'Lx1005',
							__v: 0,
							depth: 3,
							relations: []
						}
					]
				},
				{
					_id: '5c45c0177bccff62b4c83e5d',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [],
					uid: 'Lx1006',
					product: {
						id: '1006',
						name: 'Fan Blade CPU Chip dual core',
						description: 'Fan Blade'
					},
					links: [
						{
							_id: '5c45c0177bccff62b4c83e5e',
							uid: 'Lx1005',
							type: 'usedIn'
						}
					],
					parent: 'Lx1005',
					__v: 0,
					depth: 3,
					relations: []
				}
			],
			links: [
				{
					_id: '5c45b8d37bccff62b4c83e50',
					uid: 'Lx1001',
					type: 'composedOf'
				},
				{
					_id: '5c45c1ba7bccff62b4c83e68',
					uid: 'Lx2000',
					type: 'composedOf'
				}
			],
			relations: [
				{
					_id: '5c45b8d37bccff62b4c83e4e',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [ 'Lx1002', 'Lx1003' ],
					uid: 'Lx1001',
					product: {
						id: '1001',
						name: 'Intel I5 CPU CPU Chip dual core',
						description: 'HP Laptop'
					},
					links: [
						{
							_id: '5c45b8d37bccff62b4c83e4f',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45bf6b7bccff62b4c83e53',
							uid: 'Lx1002',
							type: 'composedOf'
						},
						{
							_id: '5c45bf8a7bccff62b4c83e56',
							uid: 'Lx1003',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45bf6a7bccff62b4c83e51',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx1002',
							product: {
								id: '1002',
								name: 'Intel I5 CPU Chip CPU Chip dual core',
								description: 'CPU Chip'
							},
							links: [
								{
									_id: '5c45bf6a7bccff62b4c83e52',
									uid: 'Lx1001',
									type: 'usedIn'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45bf897bccff62b4c83e54',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [ 'Lx1004', 'Lx1005' ],
							uid: 'Lx1003',
							product: {
								id: '1003',
								name: 'Intel CPU Cooler CPU Chip dual core',
								description: 'CPU Cooler'
							},
							links: [
								{
									_id: '5c45bf897bccff62b4c83e55',
									uid: 'Lx1001',
									type: 'usedIn'
								},
								{
									_id: '5c45bfc47bccff62b4c83e59',
									uid: 'Lx1004',
									type: 'composedOf'
								},
								{
									_id: '5c45bfe67bccff62b4c83e5c',
									uid: 'Lx1005',
									type: 'composedOf'
								}
							],
							parent: 'Lx1001',
							__v: 0,
							depth: 1,
							relations: [
								{
									_id: '5c45bfc47bccff62b4c83e57',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: [],
									uid: 'Lx1004',
									product: {
										id: '1004',
										name: 'CPU HeatSink',
										description: 'HeatSink'
									},
									links: [
										{
											_id: '5c45bfc47bccff62b4c83e58',
											uid: 'Lx1003',
											type: 'usedIn'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: []
								},
								{
									_id: '5c45bfe67bccff62b4c83e5a',
									timestamp: '2019-01-21T11:41:31.921Z',
									children: [ 'Lx1006', 'Lx1007', 'Lx1008' ],
									uid: 'Lx1005',
									product: {
										id: '1005',
										name: 'CPU Fan',
										description: 'Fan'
									},
									links: [
										{
											_id: '5c45bfe67bccff62b4c83e5b',
											uid: 'Lx1003',
											type: 'usedIn'
										},
										{
											_id: '5c45c0177bccff62b4c83e5f',
											uid: 'Lx1006',
											type: 'composedOf'
										},
										{
											_id: '5c45c0657bccff62b4c83e62',
											uid: 'Lx1007',
											type: 'composedOf'
										},
										{
											_id: '5c45c0a07bccff62b4c83e65',
											uid: 'Lx1008',
											type: 'composedOf'
										}
									],
									parent: 'Lx1003',
									__v: 0,
									depth: 2,
									relations: []
								}
							]
						}
					]
				},
				{
					_id: '5c45c1ba7bccff62b4c83e66',
					timestamp: '2019-01-21T11:41:31.921Z',
					children: [ 'Lx2001', 'Lx2002' ],
					uid: 'Lx2000',
					product: {
						id: '2000',
						name: 'WD HDD 1B CPU Chip dual core',
						description: 'Western Digital Darddisk'
					},
					links: [
						{
							_id: '5c45c1ba7bccff62b4c83e67',
							uid: 'Lx1000',
							type: 'usedIn'
						},
						{
							_id: '5c45c3777bccff62b4c83e6b',
							uid: 'Lx2001',
							type: 'composedOf'
						},
						{
							_id: '5c45c3a87bccff62b4c83e6e',
							uid: 'Lx2002',
							type: 'composedOf'
						}
					],
					parent: 'Lx1000',
					__v: 0,
					depth: 0,
					relations: [
						{
							_id: '5c45c3777bccff62b4c83e69',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2001',
							product: {
								id: '2001',
								name: 'Platter',
								description: 'platter Disk'
							},
							links: [
								{
									_id: '5c45c3777bccff62b4c83e6a',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45c3777bccff62b4c83e69',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2001',
							product: {
								id: '2001',
								name: 'Platter',
								description: 'platter Disk'
							},
							links: [
								{
									_id: '5c45c3777bccff62b4c83e6a',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: []
						},
						{
							_id: '5c45c3a87bccff62b4c83e6c',
							timestamp: '2019-01-21T11:41:31.921Z',
							children: [],
							uid: 'Lx2002',
							product: {
								id: '2002',
								name: 'RW Arm assembly',
								description: 'RW Arm assembly'
							},
							links: [
								{
									_id: '5c45c3a87bccff62b4c83e6d',
									uid: 'Lx2000',
									type: 'usedIn'
								}
							],
							parent: 'Lx2000',
							__v: 0,
							depth: 1,
							relations: [{
                _id: '5c45c3a87bccff62b4c83e6c',
                timestamp: '2019-01-21T11:41:31.921Z',
                children: [],
                uid: 'Lx2002',
                product: {
                  id: '2002',
                  name: 'RW Arm assembly',
                  description: 'RW Arm assembly'
                },
                links: [
                  {
                    _id: '5c45c3a87bccff62b4c83e6d',
                    uid: 'Lx2000',
                    type: 'usedIn'
                  }
                ],
                parent: 'Lx2000',
                __v: 0,
                depth: 1,
                relations: [{
                  _id: '5c45c3a87bccff62b4c83e6c',
                  timestamp: '2019-01-21T11:41:31.921Z',
                  children: [],
                  uid: 'Lx2002',
                  product: {
                    id: '2002',
                    name: 'RW Arm assembly',
                    description: 'RW Arm assembly'
                  },
                  links: [
                    {
                      _id: '5c45c3a87bccff62b4c83e6d',
                      uid: 'Lx2000',
                      type: 'usedIn'
                    }
                  ],
                  parent: 'Lx2000',
                  __v: 0,
                  depth: 1,
                  relations: [{
                    _id: '5c45c3a87bccff62b4c83e6c',
                    timestamp: '2019-01-21T11:41:31.921Z',
                    children: [],
                    uid: 'Lx2002',
                    product: {
                      id: '2002',
                      name: 'RW Arm assembly',
                      description: 'RW Arm assembly'
                    },
                    links: [
                      {
                        _id: '5c45c3a87bccff62b4c83e6d',
                        uid: 'Lx2000',
                        type: 'usedIn'
                      }
                    ],
                    parent: 'Lx2000',
                    __v: 0,
                    depth: 1,
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


	constructor() {
		const imageUrl =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuon9Cl1lIwDhwfwdNxTAa-H3b0dhuMUt6NdxchZz4bO4yZ2A';
	this.getBase64ImageFromURL(imageUrl).subscribe((base64data) => {
		this.base64Image = 'data:image/jpg;base64,' + base64data;
	});
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
    const data = (<SVGSVGElement><unknown>document.getElementById('treedata'));
	console.log('response', '<p>' + data + '</p>' );

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
			// const myWindow = window.open('', '', 'width=700, height=800');
			// console.log('response', '<img src=" ' + contentDataURL + '">' );
			const dataVal = '<img src=" ' + contentDataURL + '">';
			// myWindow.document.write('<table> ' + dataVal + '</table>');
			// myWindow.print();
			// const WinPrint = window.open('', '', '');
			// WinPrint.document.write('<p> ' + dataVal + '</p>');
			// // WinPrint.document.close();
			// // WinPrint.focus();
			// WinPrint.print();
			// WinPrint.close();
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
