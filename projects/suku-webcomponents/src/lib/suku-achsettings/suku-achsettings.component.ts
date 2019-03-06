import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-achsettings',
  templateUrl: './suku-achsettings.component.html',
  styleUrls: ['./suku-achsettings.component.scss']
})
export class SukuACHSettingsComponent implements OnInit {
 @Input() title = ' Payment Portal';
 @Input() titleId = ' paymentPortal';
 @Input() subTitle = ' ACH Settings';
 @Input() subTitleId = ' ACHSettings';
 @Input() SetupACHPaymentsBtnText = 'Setup ACH Payments';
 @Input() paymentButtonId = 'SetupACHPayments';
 @Input() lowerText = 'please setup your ACH payment profile below';
 @Input() upperText = 'ACH Payment Profile Not Complete';
 @Input() upperTextId = 'upperTextId';
 @Input() lowerTextId = 'lowerTextId';
 @Input() subtitleId = 'subtitleId';
 @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
