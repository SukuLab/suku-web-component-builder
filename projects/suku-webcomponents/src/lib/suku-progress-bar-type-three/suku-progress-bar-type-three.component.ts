import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-progress-bar-type-three',
  templateUrl: './suku-progress-bar-type-three.component.html',
  styleUrls: ['./suku-progress-bar-type-three.component.scss']
})
export class SukuProgressBarTypeThreeComponent implements OnInit {
  progressBarData;
  @Input('status-Key') statusKey = ['inProgress', 'inComplete', 'complete'];
  @Input()
  set data(val) {
    if (val) {
      if (val.length == 0) {
        const data = '1';
        document.documentElement.style.setProperty('--suku-progress-bar-count', data);
      } else {
        console.log('val.length.toString()', val.length.toString());
        const data = val.length.toString();
        document.documentElement.style.setProperty('--suku-progress-bar-count', data);
      }
      this.progressBarData = val;
    }
  }


  steps = [
    {
      '_order': 1,
      'step': {
        'facility': {
          '_id': '082721c3e14d1d7c062ee158',
          'name': 'Finca Nueva'
        },
        'description': 'At Finca Nueva, we raise the healthiest, happiest cattle.',
        'facilityType': 'Producer',
        'templateLocator': '8fe2a17eeab6ea096210205f',
        'inputs': [
          {
            'assetId': 'f3122dfe6a015dd7cac477fe',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '1b5151760a12352333748894'
          }
        ],
        'outputs': [
          {
            'assetId': '2ab8b31fb08a1236a83c495a',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '2a6b57f3a123d3b41e410795'
          }
        ]
      }
    },
    {
      'order': 10,
      'step': {
        'facility': {
          '_id': 'dacc5fd46f386e7cd10a7f1d',
          'name': 'Esmeralda'
        },
        'description': 'At Esmeralda, we are here to process your goods.',
        'facilityType': 'Processor',
        'templateLocator': 'dba2424a243d8b6b2a4f1410',
        'inputs': [
          {
            'assetId': '69b4edb0f32a8ccfaf562645',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2bdb1a123fa2d6972277'
          }
        ],
        'outputs': [
          {
            'assetId': '2969713e87e448e71dce795f',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2bda123b1fa2d6972277'
          }
        ]
      }
    },
    {
      'order': 20,
      'step': {
        'facility': {
          '_id': 'aa8e71b242ddac8cbeedeb81',
          'name': 'Sasmar'
        },
        'description': 'At Sasmar, we are here to move your goods.',
        'facilityType': 'Logistics',
        'templateLocator': '95c5e8ac473c4315f546ae39',
        'inputs': [
          {
            'assetId': '6893733cadef0c3cc831953d',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2ba123db1fa2d6972277'
          }
        ],
        'outputs': [
          {
            'assetId': 'c03bed502f70eda2587fa88e',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2bda123b1fa2d6972277'
          }
        ]
      }
    },
    {
      'order': 30,
      'step': {
        'facility': {
          '_id': '2153ec1c6a99eb8ed6525926',
          'name': 'Cedicar'
        },
        'description': 'At Cedicar, we are here to distribute your goods correctly.',
        'facilityType': 'Distributor',
        'templateLocator': 'bc15408ae4a9b7fe10aaff56',
        'inputs': [
          {
            'assetId': '7a3c779e8297ca6c3cdbdb2e',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2ba123db1fa2d6972277'
          }
        ],
        'outputs': [
          {
            'assetId': '17cd5c76c1865613b37c7e37',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2ba123db1fa2d6972277'
          }
        ]
      }
    },
    {
      'order': 40,
      'step': {
        'facility': {
          '_id': '3021c8b0b062fc85cd0e8c5d',
          'name': 'Wong'
        },
        'description': 'We are proud to sell healthy food products for a great price!',
        'facilityType': 'Supermarket',
        'templateLocator': '28c1849161583c73d38d76a7',
        'inputs': [
          {
            'assetId': '0df488a27a1231f293ea47c3',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2ba123db1fa2d6972277'
          }
        ],
        'outputs': [
          {
            'assetId': '67e7dff46a1231e9e505dcc8',
            'timestamp': '2019-07-02T08:14:27.307Z',
            'attestedBy': '6aba2ba123db1fa2d6972277'
          },
          {
            'assetId': '67e7dff46a1231e9e505dcc7'
          }
        ]
      }
    }
  ];
  @Input('icon-info') iconInfo = 'suku-shipped-icon';
  @Input('position-tooltip') positionTooltip;
  @Input('position-tooltext') positionTooltext;
  @Input('icon-info-custom-class') iconInfoCustomClass = 'suku-shipped-icon';
  @Input('custom-icon-class') customIconClass = 'suku-xl';
  constructor() { }
  ngOnInit() {

  }

}
