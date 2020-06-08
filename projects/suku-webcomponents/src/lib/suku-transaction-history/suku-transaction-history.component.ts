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
	@Input('table-header-custom-class') tableHeaderCustomClass = 'text-center';
	@Input('table-body-custom-class') tableBodyCustomClass = 'text-left';
	@Input('button-custom-class') buttonCustomClass = 'btn  btnCancel';
	@Input('type-id') typeId = 'typeId';
	@Input('my-account-id') myAccountId = 'myAccountId';
	@Input('counter-party-id') counterPartyId = 'counterPartyId';
	@Input('amount-id') amountId = 'AmountId';
	@Input('status-id') statusId = 'statusId';
	@Input('date-created-id') dateCreatedId = 'dateCreatedId';
	@Input('payment-management-Id') paymentManagementId = 'paymentManagementId';
	@Output() action = new EventEmitter();
	@Input('cancel-btn-label') cancelBtnLabel = 'Cancel';
	@Input('cancel-id') cancelId = 'cancelId';
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
