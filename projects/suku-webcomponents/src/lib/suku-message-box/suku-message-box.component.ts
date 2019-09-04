import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-message-box',
  templateUrl: './suku-message-box.component.html',
  styleUrls: ['./suku-message-box.component.scss']
})
export class SukuMessageBoxComponent implements OnInit {
  @Input() widgetTitle = 'User Information';
  @Input() widgetTitleColor = '';
  @Input() widgetTitleWeight = '';
  @Input() widgetTitleSize = '';
  @Input() widgetTitlecustomclass = '';
  @Input() widgetTitleid = '';
  @Input() shippingaddressCustomClass = '';
  @Input('content-one') contentOne ;
  @Input('content-two') contentTwo ;
  @Input('content-three') contentThree ;
  @Input('content-four') contentFour;
  constructor() { }

  ngOnInit() {
  }

}
