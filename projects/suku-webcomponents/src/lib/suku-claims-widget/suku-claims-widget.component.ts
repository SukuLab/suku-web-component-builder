import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-claims-widget',
  templateUrl: './suku-claims-widget.component.html',
  styleUrls: ['./suku-claims-widget.component.scss']
})
export class SukuClaimsWidgetComponent implements OnInit {
  @Input() claims = [
    {
      name: 'Mas fresco',
      verifiable: true,
      tooltipInfo: '',
      description: ["Optimiza el rendimiento animal", "Apoya la retención de minerales"]
    },
    {
      name: 'Mejor ternura',
      verifiable: false,
      tooltipInfo: 'claimEndorseExpired_Lbl',
      description: ["Optimiza el rendimiento animal", "Apoya la retención de minerales"]
    },
    {
      name: 'Mejor para ',
      verifiable: false,
      tooltipInfo: 'claimEndorseExpired_Lbl',
      description: ["Optimiza el rendimiento animal", "Apoya la retención de minerales"]
    }
  ];
  @Input('claim-title-custom-class') claimTitleCustomClass = '';
  @Input('claim-tooltip-custom-class') claimTooltipCustomClass = '';
  @Input() tooltipInfo = `claimEndorseExpired_Lbl <a href="#" target="_blank">click here</a> to resend the endorsement request or contact <a href="#" target="_blank">Luke</a><span> to get an updated endorsement.This does not prevent you from self-endorsing this claim or from completing step3.`;
  // @Input() tooltipInfo = 'This claim has an expired endorsement';
  @Input('position-tooltip-right') positionTooltipRight;
  @Input('position-tooltip-bottom') positionTooltipBottom;
  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
