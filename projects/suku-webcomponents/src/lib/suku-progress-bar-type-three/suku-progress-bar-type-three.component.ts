import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'suku-progress-bar-type-three',
  templateUrl: './suku-progress-bar-type-three.component.html',
  styleUrls: ['./suku-progress-bar-type-three.component.scss']
})
export class SukuProgressBarTypeThreeComponent implements OnInit {
  progressBarData;
  selected;
  enableToolTip = [];
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
  @Input('tooltip-Info') tooltipInfo = 'This step in the journey is not yet complete.';
  @Input('position-tooltip') positionTooltip;
  @Input('position-tooltext') positionTooltext;
  @Input('icon-info-custom-class') iconInfoCustomClass = 'suku-shipped-icon';
  @Input('custom-icon-class') customIconClass = 'suku-xl';
  @Input('custom-title-class') customTitleClass = '';
  @Input('enable-pointer') enablePointer = true;
  constructor() {
  }

  ngOnInit() {
  }


  showDetails(data) {
    console.log('e--', this.selected, data);
    if (this.selected == data) {
      this.selected = '';
    } else {
      this.selected = data;
    }
  }

}
