import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {
  form: FormGroup;
  statusTypesDynamic = [
    {
      displayName: 'Interest Status',
      key: 'Interest Status',
      checked: true,
      level: 0,
      label: true,
      hasSub: true,
      sub: [
        {
          displayName: 'Draft',
          key: 'Draft',
          level: 0,
          checked: false,
          hasSub: false,
          sub: []
        },
        {
          displayName: 'Pending',
          key: 'Pending',
          checked: false,
          level: 0,
          hasSub: false,
          sub: []
        },
        {
          displayName: 'Active',
          key: 'Active',
          checked: false,
          level: 0,
          hasSub: false,
          sub: []
        },
        {
          displayName: 'Expired',
          key: 'Expired',
          checked: false,
          level: 0,
          hasSub: false,
          sub: []
        }
      ]
    },
    {
      displayName: 'Includes Matches',
      key: 'Includes Matches',
      checked: true,
      level: 0,
      label: true,
      hasSub: true,
      sub: [
        {
          displayName: 'Read',
          key: 'Read',
          checked: false,
          level: 1,
          hasSub: true,
          sub: []
        },
        {
          displayName: 'Unread',
          key: 'Unread',
          checked: false,
          level: 1,
          hasSub: false,
          sub: []
        }
      ]
    }
  ];
  sample = 'tree';
  tableKeyA1 = {
    'Cow ID': 'String',
    'Approx. Age (mths.)': 'Number',
    'Approx. Weight (kgs.)': 'Number',
    Breed: ['Aungus', 'Charolais', 'Hereford', 'Simmental'],
  };
  tabelDataA1 = [];
  hiddenKey = ['brand'];
  tableKey1 = {
    'id de animal': 'String',
    'aproximado edad (meses)': 'Number',
    'aproximado peso (kg)': 'Number',
    'raza': ['Angus', 'Charolais', 'Hereford', 'Simmental']
  };
  tabelDataTest1 = [
    {
      'id de animal': '11',
      'aproximado edad (meses)': '11',
      'aproximado peso (kg)': '11',
      'raza': 'Charolais',
      'actions_TblColHdr': ''
    },
    {
      'id de animal': '22',
      'aproximado edad (meses)': '11',
      'aproximado peso (kg)': '122',
      'raza': '',
      'actions_TblColHdr': ''
    }]
  tabelData1 = [
    {
      'name': '10',
      'Physical Challenged': '',
      dob: '',
      degree: '',
      pet: '',
      'actions_TblColHdr': ''
    },
    {
      name: '10',
      'Physical Challenged': '',
      dob: '',
      degree: '',
      pet: '',
      'actions_TblColHdr': ''
    },
    {
      name: '',
      'Physical Challenged': '',
      dob: '',
      degree: '',
      pet: '',
      'actions_TblColHdr': ''
    },
    {
      name: '',
      'Physical Challenged': '',
      dob: '',
      degree: '',
      pet: '',
      'actions_TblColHdr': ''
    }
    // {
    //   name: 'Roy',
    //   'Physical Challenged': true,
    //   dob: '2019-12-09',
    //   degree: '',
    //   pet: 'cat',
    //   action: ''
    // },
    // {
    //   name: 'Bean',
    //   'Physical Challenged': false,
    //   dob: '2014-12-29',
    //   degree: '',
    //   pet: 'dog',
    //   action: ''
    // }
  ];
  tableKey2 = {
    'selection_TblColHdr': 'Checkbox',
    Sku: 'Number',
    'brand_TblColHdr': 'String',
    'product name': 'String',
    '# of Boxes': 'Number'
  };
  tabelData2 = [
    {
      'selection_TblColHdr': true,
      Sku: '123465',
      'brand_TblColHdr': 'WONG PREMIUM',
      'product name': 'TBONE',
      '# of Boxes': '45',
      temp: '12'
    },
    {
      'selection_TblColHdr': true,
      Sku: '123465',
      'brand_TblColHdr': 'WONG PREMIUM',
      'product name': 'TBONE',
      '# of Boxes': '5',
      temp: '21'
    },
    {
      'selection_TblColHdr': false,
      Sku: '123465',
      'brand_TblColHdr': 'WONG PREMIUM -',
      'product name': 'TBONE',
      '# of Boxes': '',
      temp: '21'
    },
    {
      'selection_TblColHdr': false,
      Sku: '123465',
      'brand_TblColHdr': 'WONG PREMIUM',
      'product name': 'TBONE',
      '# of Boxes': '2',
      temp: '21'
    }
  ];
  tableKey3 = {
    Sku: 'Number',
    'brand_TblColHdr': 'String',
    'product name': 'String',
    '# of Boxes': 'Number',
    'Received All Boxes': 'Checkbox',
    '# of Boxes Received': 'Number',
    temp: '',
  };
  tabelData3 = [
    {
      Sku: '34564',
      'brand_TblColHdr': 'WONG PREMIUM',
      'product name': 'PICAHNA',
      '# of Boxes': '45',
      'Received All Boxes': false,
      '# of Boxes Received': '',
    },
    {
      Sku: '34564',
      'brand_TblColHdr': 'WONG PREMIUM',
      'product name': 'TBONE',
      '# of Boxes': '4',
      'Received All Boxes': false,
      '# of Boxes Received': '',
    },
    {
      Sku: '34564',
      'brand_TblColHdr': 'WONG PREMIUM',
      'product name': 'TBONE',
      '# of Boxes': '14',
      'Received All Boxes': false,
      '# of Boxes Received': '',
    }
  ];


  buttonData = {
    title: 'Marketplace',
    icon: 'fa fa-shopping-cart',
    path: '/marketplaceDashboard',
    disabled: true,
    id: 'Marketplace'
  };

  dataCard = ['beefChain', 'test-2', 'test-3'];
  dropDownData = [{
    '_id': '5cdc2038e993be00125c6988',
    'templateName': 'Beef (Rolled)-0515'
  },
  {
    '_id': '5cdd6d709b4a170012b29765',
    'templateName': 'Rolled Beef Meat 10KG'
  },
  {
    '_id': '5ce64d0147433300124d4df7',
    'templateName': 'UHF Ear Tag for cattle '
  }];
  data = [
    {
      '_id': '5cdc3f51d104e7003b518653',
      'asset': {
        'id': '1011',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled',
        'bidId': '1007',
        'transactionId': '1010'
      },
      'uid': 'a1ab6609-3dd1-9c2f-8799-323c7aa1688f'
    },
    {
      '_id': '5cdd0a7a34dabd003c7a08de',
      'asset': {
        'id': '1022',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled',
        'bidId': '1006',
        'transactionId': '1011'
      },
      'uid': 'bb97e7f8-e93d-a932-f9ea-bed6f24e10b1'
    },
    {
      '_id': '5cde58f387614f003018b958',
      'asset': {
        'id': '1101',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled',
        'bidId': '1022',
        'transactionId': '1023'
      },
      'uid': '8f1c40f0-5e2d-46aa-4bd0-8c5963e24930'
    },
    {
      '_id': '5ce6380a07527b0047cf738d',
      'asset': {
        'id': '1341',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled'
      },
      'uid': '96c031e9-b12b-ad2b-6014-f8893b036967'
    },
    {
      '_id': '5ce69d37ef5444003ce43fb7',
      'asset': {
        'id': '1365',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled'
      },
      'uid': '4701474c-d0e3-eced-6f98-e321174b4505'
    },
    {
      '_id': '5ceb75a0ef5444003ce43fb8',
      'asset': {
        'id': '1452',
        'name': 'Beef Rolled',
        'description': 'Beef, the flesh of mature cattle, as distinguished from veal, the flesh of calves. The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed. In young beef the bones are soft, porous, and red; the less desirable mature beef has hard white bones. Beef tenderness and flavour are improved by ageing; in one common ageing method the carcass is '
      },
      'uid': '6c7c9a15-2115-9d1e-3f60-9906822183f4'
    },
    {
      '_id': '5cfdf1b932124b003b0f7fed',
      'asset': {
        'id': '1701',
        'name': 'Beef roll meat',
        'description': 'Beef roll meat',
        'bidId': '1168',
        'transactionId': '1045'
      },
      'uid': 'a66851ea-9bb1-e273-11c6-c6a23c149474'
    },
    {
      '_id': '5d06987afbd76a0028fc91a4',
      'asset': {
        'id': '1763',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled',
        'bidId': '1196',
        'transactionId': '1057'
      },
      'uid': '6ded257d-7aa8-98ab-beef-a3710e5fa1ab'
    },
    {
      '_id': '5d0892c8b6e7490028eb42cc',
      'asset': {
        'id': '1782',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled',
        'bidId': '1221',
        'transactionId': '1070'
      },
      'uid': '8d9a51ec-4bcd-d67c-fcb2-7400e0726c94'
    },
    {
      '_id': '5d0dc73a71017f0029f7eae7',
      'asset': {
        'id': '1811',
        'name': 'Beef Rolled 2206',
        'description': 'Beef Rolled 2206',
        'bidId': '1224',
        'transactionId': '1072'
      },
      'uid': '965f1251-34be-49ed-32ab-a253615ab1a5'
    },
    {
      '_id': '5d109c4a7e7ad7002835eca0',
      'asset': {
        'id': '1823',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled'
      },
      'uid': '2def0a86-2840-82fd-2ff9-38bd46e32c5f'
    },
    {
      '_id': '5d3075489fcf200028d29724',
      'asset': {
        'id': '1994',
        'name': 'Beef Rolled',
        'description': 'Beef Rolled'
      },
      'uid': 'c652cc38-5d9b-bc15-ee51-9016653c1ff5'
    }
  ];
  gallery = [
    {
      index: 'one',
      type: 'image',
      checked: true,
      link:
        'https://leiscreekcattleco.com/wp-content/uploads/2018/10/WhyAkaushiPhoto.jpg'
    },
    {
      index: 'two',
      type: 'image',
      checked: false,
      link:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaurornWO8dpOQVsH3hxOjonAzHbbcMsOA0g6_ziGZVT92HBsP'
    },

    {
      index: 'four',
      type: 'image',
      checked: false,
      link:
        'https://www.uaex.edu/farm-ranch/animals-forages/images/baldy%20with%20calf%20square.JPG'
    },
    {
      index: 'three',
      type: 'video',
      checked: false,
      link:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
      index: 'one',
      type: 'image',
      checked: false,
      link:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXN6xiu-IvpxOb93cBuTrqJwXM5IcMStHAMKpMLXx7K6qfENb'
    },
    {
      index: 'one',
      type: 'image',
      checked: false,
      link:
        'https://upload.wikimedia.org/wikipedia/commons/f/f6/Limia_cattle.jpg'
    },
    {
      index: 'one',
      type: 'image',
      checked: false,
      link:
        'http://www.broken-spur-ranch.com/Sites/10/image/Zabaco%20Feb.%20-%20Copy.jpg'
    },
    {
      index: 'two',
      type: 'image',
      checked: false,
      link:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIJXakzsFcGAsLMqlbwWFZtZqrliH6rJN6HdWAHPfW36EQF08'
    }
  ];

  value;
  formValue = {
    username: 'testUser',
    password: 'Pass@123'
  };

  image = '../../assets/icons/group.svg';

  sampleAssetsData = [
    {
      brand: {
        _id: '3021c8b0b062fc85cd0e8c5d',
        name: 'Wong Premium',
      },
      marketplace: {
        _id: '5d7698a75c7a7011ddeb157a',
        name: '',
      },
      extras: {
        coupons: ['https://coupon.com'],
        details: [
          {
            title: 'Cooking Tips',
            description:
              'Bacon ipsum dolor amet chicken spare ribs tenderloin salami strip steak sausage ball tip ham swine picanha.',
          },
        ],
      },
      ids: [
        {
          id: '487141',
          type: 'SKU',
        },
      ],
      photos: [
        'https://wongfood.vteximg.com.br/arquivos/ids/168354-1000-1000/Asado-de-Aguja-Wong-Premium-x-Kilo-1-8147.jpg?v=636416324177970000',
      ],
      videos: [
        'https://suku-scanner.s3-us-west-2.amazonaws.com/sizzling-steak.mp4',
      ],
      url: ['https://www.wong.pe/asado-de-aguja-wong-premium-x-kg-487141/p'],
      version: [
        {
          '# of Boxes': 'Number'
        }
      ],
      _id: '5d7698a7571ca311dd5af90e',
      skuku: '050',
      name: 'Asado De Aguja',
      description:
        'This meat comes from cattle of European origin, which complements their diet with the natural antioxidant Sel-Plex making it healthier. Vacuum packed. Weight approx 1.5 Kg (Reference Photo. Products are sold in their original state).',
      previewVideo:
        'https://suku-scanner.s3-us-west-2.amazonaws.com/sizzling-steak.mp4',
    },
    {
      brand: {
        _id: '3021c8b0b062fc85cd0e8c5d',
        name: 'Wong Premium',
      },
      marketplace: {
        _id: '5d7698a75c7a7011ddeb157a',
        name: '',
      },
      extras: {
        coupons: ['https://coupon.com'],
        details: [
          {
            title: 'Cooking Tips',
            description:
              'Bacon ipsum dolor amet chicken spare ribs tenderloin salami strip steak sausage ball tip ham swine picanha.',
          },
        ],
      },
      ids: [
        {
          id: '487142',
          type: 'SKU',
        },
      ],
      photos: [
        'https://wongfood.vteximg.com.br/arquivos/ids/168354-1000-1000/Asado-de-Aguja-Wong-Premium-x-Kilo-1-8147.jpg?v=636416324177970000',
      ],
      videos: [
        'https://suku-scanner.s3-us-west-2.amazonaws.com/sizzling-steak.mp4',
      ],
      url: ['https://www.wong.pe/asado-de-aguja-wong-premium-x-kg-487141/p'],
      version: [
        {
          '# of Boxes': 'Number'
        }
      ],
      _id: '5d7698a7571ca311dd5af91f',
      skuku: '023',
      name: 'Asado Ruso',
      description:
        'This meat comes from cattle of European origin, which complements their diet with the natural antioxidant Sel-Plex making it healthier. Vacuum packed. Weight approx 1.5 Kg (Reference Photo. Products are sold in their original state).',
      previewVideo:
        'https://suku-scanner.s3-us-west-2.amazonaws.com/sizzling-steak.mp4',
    },
    {
      brand: {
        _id: '3021c8b0b062fc85cd0e8c5d',
        name: 'Wong Premium',
      },
      marketplace: {
        _id: '5d7698a75c7a7011ddeb157a',
        name: '',
      },
      extras: {
        coupons: ['https://coupon.com'],
        details: [
          {
            title: 'Cooking Tips',
            description:
              'Bacon ipsum dolor amet chicken spare ribs tenderloin salami strip steak sausage ball tip ham swine picanha.',
          },
        ],
      },
      ids: [
        {
          id: '744518',
          type: 'SKU',
        },
      ],
      photos: [
        'https://wongfood.vteximg.com.br/arquivos/ids/168354-1000-1000/Asado-de-Aguja-Wong-Premium-x-Kilo-1-8147.jpg?v=636416324177970000',
      ],
      videos: [
        'https://suku-scanner.s3-us-west-2.amazonaws.com/sizzling-steak.mp4',
      ],
      url: ['https://www.wong.pe/asado-de-aguja-wong-premium-x-kg-487141/p'],
      version: [
        {
          '# of Boxes': 'Number'
        }
      ],
      _id: '5d7698a7571ca311dd5af91f',
      skuku: '012',
      name: 'Cowboy Steak',
      description:
        'This meat comes from cattle of European origin, which complements their diet with the natural antioxidant Sel-Plex making it healthier. Vacuum packed. Weight approx 1.5 Kg (Reference Photo. Products are sold in their original state).',
      previewVideo:
        'https://suku-scanner.s3-us-west-2.amazonaws.com/sizzling-steak.mp4',
    }
  ];
  sampleAssetsDataForLogi = [
    {
      _id: '67e7dff46a1231e9e505dcc8',
      skuku: '001',
      lotId: '1',
      ids: [
        {
          id: '487141',
          type: 'SKU',
        },
      ],
      name: 'Asado De Aguja',
      version: 0,
      attributes: {
        '# of Boxes': 45,
      },
    },
    {
      _id: 'f25742857e0a123e05e9fdee',
      skuku: '010',
      lotId: '1',
      ids: [
        {
          id: '487142',
          type: 'SKU',
        },
      ],
      name: 'Asado Ruso',
      version: 0,
      attributes: {
        '# of Boxes': 60,
      },
    },
    {
      _id: 'f51cf10c79a1235aedb083f4',
      skuku: '012',
      lotId: '1',
      ids: [
        {
          id: '487165',
          type: 'SKU',
        },
      ],
      name: 'Asado De Tira',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: 'f3122dfe6a015dd7cac477fe',
      skuku: '013',
      lotId: '1',
      ids: [
        {
          id: '487167',
          type: 'SKU',
        },
      ],
      name: 'Entraña Fina',
      version: 0,
      attributes: {
        '# of Boxes': 20,
      },
    },
    {
      _id: '2ab8b31fb08a1236a83c495a',
      skuku: '014',
      lotId: '1',
      ids: [
        {
          id: '487170',
          type: 'SKU',
        },
      ],
      name: 'Bife De Vacio',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: '69b4edb0f32a8ccfaf562645',
      skuku: '015',
      lotId: '1',
      ids: [
        {
          id: '487171',
          type: 'SKU',
        },
      ],
      name: 'Colita De Cuadril',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: '2969713e87e448e71dce795f',
      skuku: '016',
      lotId: '1',
      ids: [
        {
          id: '487172',
          type: 'SKU',
        },
      ],
      name: 'Bife Angosto',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: '6893733cadef0c3cc831953d',
      skuku: '037',
      lotId: '1',
      ids: [
        {
          id: '487175',
          type: 'SKU',
        },
      ],
      name: 'Picanha',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: '7a3c779e8297ca6c3cdbdb2e',
      skuku: '030',
      lotId: '1',
      ids: [
        {
          id: '487176',
          type: 'SKU',
        },
      ],
      name: 'T-bone',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: 'c03bed502f70eda2587fa88e',
      skuku: '019',
      lotId: '1',
      ids: [
        {
          id: '487178',
          type: 'SKU',
        },
      ],
      name: 'Asado Pejerrey',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    },
    {
      _id: '17cd5c76c1865613b37c7e37',
      skuku: '040',
      lotId: '1',
      ids: [
        {
          id: '487182',
          type: 'SKU',
        },
      ],
      name: 'Bife Ancho',
      version: 0,
      attributes: {
        '# of Boxes': 25,
      },
    }
  ];
  highlightnerArray = [];
  highlightnerLogisticsArray = [
    {
      key: '# of Boxes'
    }
  ];

  sampleData = [];
  sampleDataForLogistics = [];

  tableKeyForLogistics = {
    Sku: 'Number',
    brand: 'String',
    'product name': 'String',
    '# of Boxes': 'Number',
    'Received All Boxes': 'Checkbox',
    '# of Boxes Received': 'Number',
  };
  dataForDistributor = [
    {
      'Sku': '744518',
      'brand': 'Wong Premium',
      'product name': 'Cowboy Steak',
      '# of Boxes': '12',
      'Received All Boxes': false,
      '# of Boxes Received': ''
    },
    {
      'Sku': '744518',
      'brand': 'Wong Premium',
      'product name': 'Cowboy Steak',
      '# of Boxes': '1',
      'Received All Boxes': false,
      '# of Boxes Received': ''
    }
  ]
  textcount = 0;
  navData = {
    logo: 'assets/images/Suku_Logo_white.png',
    Username: '',
    companyName: '',
    bellIcon: '',
    bellIconId: 'notificationIcon',
    notificationCountId: 'notificationCount',
    submenu: [
      {
        name: 'logout_Lbl',
        subMenu: false
      }
    ]
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'search': '',
      'sample': '',
      'fromDate': '',
      'toDate': '',
      'tillDate': '',
      'trace': '',
      'productId': '',
      'productList': '',
      'owner': this.fb.array([]),
      'beneficialCheckBox': ''
    });
    (<FormArray>this.form.get('owner')).push(this.control());
    this.value = 'Beef (Rolled)-0515';
    setTimeout(() => {
      this.sampleAssetsData.forEach(val => {
        const template = {
          'selection_TblColHdr': false,
          Sku: val.skuku,
          'brand_TblColHdr': val.brand.name,
          'product name': val.name
        };
        this.sampleData.push(template);
        Object.keys(val.version[0]).forEach(value => {
          console.log('val-- test', value);
          const isPresent = this.highlightnerArray.some(ele => {
            return ele.key == value;
          });
          console.log('isPresent', isPresent);
          if (!isPresent) {
            this.highlightnerArray.push({ 'key': value });
          }
          this.sampleData.map(vals => {
            vals[value] = '';
          });
        });
        console.log('val', val);
      });
    }, 2000)
    /* logistics */
    this.sampleAssetsDataForLogi.forEach(val => {
      const template = {
        Sku: val.skuku,
        'brand_TblColHdr': val.name,
        'product name': val.name,
        '# of Boxes': val.attributes['# of Boxes'],
        'Received All Boxes': false
      };
      this.sampleDataForLogistics.push(template);
      this.sampleDataForLogistics.map(vals => {
        vals['# of Boxes Received'] = '';
      });
      // Object.keys(val.version[0]).forEach(value => {
      //   console.log('val-- test', value);
      //   const isPresent = this.highlightnerLogisticsArray.some(ele => {
      //     return ele.key == value;
      //   });
      //   console.log('isPresent', isPresent);
      //   if (!isPresent) {
      //     this.highlightnerLogisticsArray.push({ 'key': value });
      //   }
      //   this.sampleData.map(vals => {
      //     vals[value] = '';
      //   });
      // });
    });
    const unique_array = this.removeDuplicates(this.highlightnerArray);
    // unique_array = Array.from(new Set(unique_array));
    console.log('sampleDataForLogistics', this.sampleDataForLogistics);
    console.log('this.sampleData', this.sampleData, unique_array);
  }

  search() {
    console.log('form', this.form.value.search);
  }

  control(): FormGroup {
    return this.fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      dateOfBirth: new FormControl(),
      ssn: new FormControl(),
      address: this.fb.group({
        address1: new FormControl(),
        address2: new FormControl(),
        city: new FormControl(),
        stateProvinceRegion: new FormControl({ value: '', disabled: true }),
        country: new FormControl(),
        postalCode: new FormControl(),
        document: ''
      })
    });
  }

  upload(e) {
    console.log(e);
  }

  action(e, val) {
    console.log(e, val);
  }
  something(e) {
    console.log('thi sis something:', e);
  }

  removeDuplicates(arr) {
    const unique_array = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) == -1) {
        unique_array.push(arr[i])
      }
    }
    return unique_array;
  }

  async getAssetArray(e) {
    console.log('e', e);
  }

  formStatusEv(e) {
    console.log('Producer', e);
  }

  textCount(e) {
    this.textcount = e;
  }
}
