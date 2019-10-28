import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-user-details',
  templateUrl: './suku-user-details.component.html',
  styleUrls: ['./suku-user-details.component.scss']
})
export class SukuUserDetailsComponent implements OnInit {
  @Input() widgetTitle = 'User Information';
  @Input() widgetTitleColor = '';
  @Input() widgetTitleWeight = '';
  @Input() widgetTitleSize = '';
  @Input() widgetTitlecustomclass = '';
  @Input() widgetTitleid = '';
  @Input() shippingaddressCustomClass = '';
  @Input() email;
  @Input() phoneNumber;
  @Input() fullName;
  @Input() fullAddress;
  @Input() firstName;
  @Input() secondName;
  @Input() addressOne;
  @Input() addressTwo;
  @Input() city;
  @Input() state;
  @Input() zip;
  @Input() country;
  constructor() { }

  ngOnInit() {
  }

}
