import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'suku-card-title',
  templateUrl: './suku-card-title.component.html',
  styleUrls: ['./suku-card-title.component.scss']
})
export class SukuCardTitleComponent implements OnInit {
  @Input('card-title-name') cardTitleName = 'INTEREST NAME';
  @Input('card-title-id') cardTitleId = 'heading';
  @Input('card-title-size') cardTitlesize = '12';
  @Input('card-title-color') cardTitlecolor = '#b6b6b6';
  @Input('card-title-weight') cardTitleweight;
  @Input('card-content-name') cardContentName = 'Spring Cases';
  @Input('card-content-id') cardContentId = 'Content';
  @Input('card-content-size') cardContentsize = '17';
  @Input('card-content-color') cardContentcolor = '#1d1d1d';
  @Input('card-content-weight') cardContentweight = '700';
  @Input('custom-title-class') customTitleClass = 'primary';
  @Input('custom-content-class') customContentClass = 'secondary';
  @Input('content-type-array') contentTypeArray = false;
  @Input('display-key') displayKey = '';
  @Input('icon-color') iconColor = 'black';
  @Input('icon-font-size') iconFontSize = '';
  @Input('enable-info-tooltip') enableInfoTooltip = '';
  @Input('tooltip-info') tooltipInfo = '';
  @Input('tooltiptext-customclass') tooltiptextCustomclass = '';
  @Input('position-tooltip') positionTooltip;
  @Input('position-top-tooltext') positionTopTooltext;
  @Input('position-btn-tooltext') positionBtmTooltext;
  constructor() { }

  ngOnInit() {
  }

}
