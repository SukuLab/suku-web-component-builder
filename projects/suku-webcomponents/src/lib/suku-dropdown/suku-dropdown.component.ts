import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';

@Component({
	selector: 'suku-dropdown',
	templateUrl: './suku-dropdown.component.html',
	styleUrls: [ './suku-dropdown.component.scss' ]
})
export class SukuDropdownComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() control = 'productTraceability';
	@Input() data = [];
	@Input() icon = '../assets/images/arrow-icon.png';
	@Input() keyValue = 'productName';
	@Input() displayKey = 'productName';
	@Input() placeholder = 'select product from this listing';
	@Input() formSumitAttempt;
	@Input() selectId = 'sttProductTraceability';
	@Input() errorMsg = 'Cannot be blank';
	@Input() customSelectClass = '';
	@Output() select = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	isFieldValid(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSumitAttempt)
		);
	}
}
