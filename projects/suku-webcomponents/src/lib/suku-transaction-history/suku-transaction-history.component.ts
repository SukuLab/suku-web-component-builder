import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'suku-transaction-history',
	templateUrl: './suku-transaction-history.component.html',
	styleUrls: ['./suku-transaction-history.component.scss']
})
export class SukuTransactionHistoryComponent implements OnInit {
	@Input('transaction-history') transactionHistory = 'Transaction History';
	@Input('transaction-details-id') transactionDetailsId = 'transactionDetailsId';
	@Input() heading;
	@Input('custom-class') customClass = 'historyWidget p-4 pt-2 pb-3 text-white text-center ';
	@Input('table-bg-color') tableBgColor = 'tableBg mb-0 pl-4 pr-5';
	@Input('transaction-history-tittle') transactionHistoryTittle = 'pop text-center mb-0';
	@Input('bg-custom-class') bgCustomClass = 'box-shadows mb-3 p-0';
	@Input('spinner-custom-class') spinnerCustomClass = 'justify-content-center';
	@Input('spinner-radius') spinnerRadius = '65';
	@Input('spinner-color') spinnerColor = 'primary';
	@Input('loading-custom-class') loadingCustomClass = 'mt-4 pb-3 col-sm-12 text-center';
	@Input('loader-message') loaderMessage = 'Please wait... ';
	@Input('loading-color') loadingColor;
	@Input('loading-size') loadingSize;
	@Input('loading-weight') loadingWeight;
	@Input() tableHeaderCustomClass = 'text-center';
	@Input() tableBodyCustomClass = 'text-left';
	@Input() buttonCustomClass = 'btn  btnCancel';
	@Input() typeId = 'typeId';
	@Input() myAccountId = 'myAccountId';
	@Input() counterPartyId = 'counterPartyId';
	@Input() counterparty = 'Counter Party';
	@Input() amountId = 'AmountId';
	@Input() statusId = 'statusId';
	@Input() dateCreatedId = 'dateCreatedId';
	@Input() paymentManagementId = 'paymentManagementId';
	@Output() action = new EventEmitter();
	@Input() cancelId = 'cancelId';
	@Input() cancel = 'Cancel';
	@Input() transactionDetails = [];
	constructor() { }



	ngOnInit() {
		this.heading = {
			type: 'Type',
			myAccount: 'My Account',
			counterparty: 'Counterparty',
			amount: 'Amount',
			status: 'Status',
			dateInitiated: 'Initiated On',
			dateCreated: 'Completed On',
			paymentManagement: 'Payment Management'
		};
	}
}
