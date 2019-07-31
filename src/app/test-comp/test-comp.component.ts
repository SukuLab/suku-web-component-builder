import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {
  form: FormGroup;
  buttonData = {
    title: 'Marketplace',
    icon: 'fa fa-shopping-cart',
    path: '/marketplaceDashboard',
    disabled: true,
    id: 'Marketplace'
  };
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

  //      {
  //   index: 'three',
  //     type: 'video',
  //       checked: false,
  //         link:
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  // },
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'search': '',
      'sample': '',
      'trace': '',
      'productId': '',
      'productList': '',
      'owner': this.fb.array([]),
      'beneficialCheckBox': ''
    });
    (<FormArray>this.form.get('owner')).push(this.control());
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

}
