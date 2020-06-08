import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var dwolla: any;
import { MatSnackBar } from '@angular/material';
@Component({
	selector: 'suku-dwolla-funding-source',
	templateUrl: './suku-dwolla-funding-source.component.html',
	styleUrls: ['./suku-dwolla-funding-source.component.scss']
})
export class SukuDwollaFundingSourceComponent implements OnInit {
	_iavToken;
	_validResponse;
	enable = {
		button: false
	};

	@Input('type') type = 'Production';
	@Input('iav-token')
	get iavToken() {
		return this._iavToken;
	}
	set iavToken(val) {
		this._iavToken = val;
	}

	@Input()
	get validResponse() {
		return this._validResponse;
	}
	set validResponse(val) {
		this._validResponse = val;
		console.log('_validResponse', this._validResponse);
		if (this._validResponse) {
			this.getDwollaHtml();
		} else {
			this.snackbar('Please wait...');
		}
	}

	@Output() action = new EventEmitter();

	constructor(private snackBar: MatSnackBar) { }

	ngOnInit() { }

	getDwollaHtml() {
		if (this._iavToken) {
			if (document.getElementById('iavContainer')) {
				const list = document.getElementById('iavContainer');
				while (list.hasChildNodes()) {
					list.removeChild(list.firstChild);
				}
			}
			console.log('triggered', this._iavToken);
			if (this.type != 'Production') {
				dwolla.configure('sandbox');
			}
			dwolla.iav.start(
				this._iavToken,
				{
					container: 'iavContainer',
					stylesheets: ['https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'],
					microDeposits: true,
					backButton: true,
					fallbackToMicroDeposits: true
				},
				(err, res) => {
					console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
					if (res) {
						const checkResponse = res['_links']['funding-source'].href;
						if (checkResponse) {
							this.enable.button = true;
						} else {
							this.enable.button = false;
						}
					}
				}
			);
		} else {
			this.snackbar('Please try after sometime.');
		}
	}

	snackbar(msg) {
		this.snackBar.open(msg, 'close', {
			verticalPosition: 'bottom',
			horizontalPosition: 'right',
			duration: 3000
		});
	}
}
