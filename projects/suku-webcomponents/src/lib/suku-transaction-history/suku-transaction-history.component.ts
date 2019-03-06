import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-transaction-history',
  templateUrl: './suku-transaction-history.component.html',
  styleUrls: ['./suku-transaction-history.component.scss']
})
export class SukuTransactionHistoryComponent implements OnInit {
  @Input() transactionDetailsId = 'transactionDetailsId';
  @Input() transactionDetails = 'transactionDetails';
  @Input() type = 'Type';
  @Input() typeId = 'typeId';
  @Input() myAccount = 'My Account';
  @Input() myAccountId = 'myAccountId';
  @Input() counterPartyId = 'counterPartyId';
  @Input() counterParty = 'Counter Party';
  @Input() amount = 'Amount';
  @Input() amountId = 'AmountId';
  @Input() statusId = 'statusId';
  @Input() status = 'Status';
  @Input() dateCreate = 'Date Created';
  @Input() dateCreatedId = 'dateCreatedId';
  @Input() paymentManagementId = 'paymentManagementId';
  @Input() paymentManagement = 'Payment Management';
  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
