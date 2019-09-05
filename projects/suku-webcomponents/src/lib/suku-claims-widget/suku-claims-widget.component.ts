import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-claims-widget',
  templateUrl: './suku-claims-widget.component.html',
  styleUrls: ['./suku-claims-widget.component.scss']
})
export class SukuClaimsWidgetComponent implements OnInit {
  @Input() claims = [
    {
      name: 'Mas fresco',
      verifiable: true
    },
    {
      name: 'Mejor ternura',
      verifiable: false
    },
    {
      name: 'Mejor para medio ambiente y animal',
      verifiable: false
    }
  ];
  @Input() tooltipInfo = 'This claim has name an expired endorsement';
  @Input('position-tooltip-left') positionTooltipLeft;
  @Input('position-tooltip-top') positionTooltipTop;
  constructor() { }

  ngOnInit() {
  }

}
