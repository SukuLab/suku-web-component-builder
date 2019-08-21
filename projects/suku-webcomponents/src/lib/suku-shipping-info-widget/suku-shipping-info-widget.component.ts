import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-shipping-info-widget',
  templateUrl: './suku-shipping-info-widget.component.html',
  styleUrls: ['./suku-shipping-info-widget.component.scss']
})
export class SukuShippingInfoWidgetComponent implements OnInit {
@Input() widgetTitle = 'Shipping Information';
@Input() widgetTitleColor = '';
@Input() widgetTitleWeight = '';
@Input() widgetTitleSize = '';
@Input() widgetTitlecustomclass = '';
@Input() widgetTitleid = '';
@Input() shippingaddressCustomClass = '';
@Input() firstName = '';
@Input() secondName = '';
@Input() addressOne = '';
@Input() addressTwo = '';
@Input() city = '';
@Input() state = '';
@Input() zip = '';
@Input() country = '';
  constructor() { }

  ngOnInit() {
  }

}
