import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-payment-portal-help',
  templateUrl: './suku-payment-portal-help.component.html',
  styleUrls: ['./suku-payment-portal-help.component.scss']
})
export class SukuPaymentPortalHelpComponent implements OnInit {
  @Input() title = 'Payments Help Page';
  @Input() titleId = 'paymentsHelpPage';
  @Input() titleCustomClass = '';
  @Input('sub-title') subTitle = 'ACH PAYMENTS';
  @Input('sub-title-id') subTitleId = 'achPayment';
  @Input('sub-title-custom-class') subTitleCustomClass = '';
  @Input('description-custom-class') descriptionCustomClass = '';
  @Input('description-Id') descriptionId = '';
  @Input() icon = 'fa fa-plus-circle';
  @Input('icon-id') iconId = 'fa-plus-circle';
  @Input('label-one') labelOne = 'Add New Beneficial Owner';
  @Input('label-one-id') labelOneId = 'addNewBeneficialOwner';
  @Input('label-one-custom-class') labelOneCustomClass = '';
  @Output() add = new EventEmitter();
  constructor() {}
  ngOnInit() {}
}
