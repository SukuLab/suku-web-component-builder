import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-icon-widget',
  templateUrl: './suku-icon-widget.component.html',
  styleUrls: ['./suku-icon-widget.component.scss']
})
export class SukuIconWidgetComponent implements OnInit {
  @Input() icon = 'suku-shipped-icon';
  @Input('icon-id') iconId = 'suku-shipped-icon';
  @Input('icon-info') iconInfo = 'suku-shipped-icon';
  @Input('position-tooltip') positionTooltip;
  @Input('position-tooltext') positionTooltext;
  @Input('icon-info-custom-class') iconInfoCustomClass = 'suku-shipped-icon';
  @Input('custom-icon-class') customIconClass = 'suku-xl';
  constructor() { }

  ngOnInit() {
  }

}
