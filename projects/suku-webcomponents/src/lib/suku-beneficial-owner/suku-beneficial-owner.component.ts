import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'suku-beneficial-owner',
	templateUrl: './suku-beneficial-owner.component.html',
	styleUrls: ['./suku-beneficial-owner.component.scss']
})
export class SukuBeneficialOwnerComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() title = 'Beneficial Owners';
	@Input() titleClass = 'mb-3 mt-5 ';
	@Input() titleCustomClass = '';
	@Input() titleid = '';
	@Input() titleWeight = '';
	@Input() titleColor = '';
	@Input() titleSize = '';
	@Input() countriesList;
	@Input() statesList;
	@Input() formValid: Boolean;
	@Input() control = '';
	@Input() arrayControlName;
	@Input()
	content = `I, Daisy, hereby certify, to the best of my knowledge, that the
  information provided above is complete and correct.`;
	@Input() type = 'info';
	@Input('btn-one') btnOne = 'Submit Beneficial Owner';
	@Input('btn-one-id') btnOneId = 'submitBeneficialOwner';
	@Input('btn-one-custom-class') btnOneCustomClass = '';
	@Input('btn-one-disable') btnOneDisable: Boolean = false;
	@Input('btn-two') btnTwo = 'Agree & Continue';
	@Input('btn-two-custom-class') btnTwoCustomClass = '';
	@Input('btn-two-id') btnTwoId = 'agreeBtn';
	@Input('btn-two-disable') btnTwoDisable: Boolean = false;
	@Input('label-one') labelOne = 'Add New Beneficial Owner';
	@Input('label-one-id') labelOneId = 'addOwner';
	@Output() countrySelect = new EventEmitter();
	@Output() stateSelect = new EventEmitter();
	@Output() upload = new EventEmitter();
	@Output() submitOwner = new EventEmitter();
	@Output() add = new EventEmitter();
	@Output() submitData = new EventEmitter();
	@Output() verify = new EventEmitter();
	selected = [];
	toggle = [];
	customClass;
	documentType;
	uploadType;
	constructor(private snackBar: MatSnackBar) { }

	ngOnInit() {
		this.formValid = true;
		for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
			this.toggle[j] = false;
		}
		this.selected[0] = 0;
		this.toggle[0] = true;
		this.btnTwoDisable = true;
	}

	active(i) {
		this.selected[i] = i;
		this.toggle[i] = !this.toggle[i];
		for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
			if (i != j) {
				this.selected[j] = null;
			}
		}
		if (!this.toggle[i]) {
			this.selected[i] = null;
		} else {
			for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
				if (i != j) {
					this.toggle[j] = false;
				}
			}
		}
	}

	action() {
		const controlName = this.control;
		if (this.form.get(controlName).value) {
			this.btnTwoDisable = false;
			this.verify.emit();
		} else {
			this.btnTwoDisable = true;
		}
	}

	countrySelectAction(val, i) {
		if (val) {
			const data = {
				countryDetails: JSON.parse(val),
				index: i
			};
			this.countrySelect.emit(data);
		}
	}

	agree() {
		const formData = this.form.value;
		this.submitOwner.emit(formData);
	}

	snackbar(msg) {
		this.snackBar.open(msg, 'close', {
			verticalPosition: 'bottom',
			horizontalPosition: 'right',
			duration: 3500
		});
	}
}
