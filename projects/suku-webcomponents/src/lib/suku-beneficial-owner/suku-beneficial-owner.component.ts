import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'suku-beneficial-owner',
	templateUrl: './suku-beneficial-owner.component.html',
	styleUrls: [ './suku-beneficial-owner.component.scss' ]
})
export class SukuBeneficialOwnerComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() title = 'Beneficial Owners';
	@Input() titleClass = 'mb-3 mt-5 ';
	@Input() countriesList;
	@Input() statesList;
	@Input() formValid: Boolean;
	@Input() control;
	@Input() arrayControlName;
	@Input()
	content = `I, Daisy, hereby certify, to the best of my knowledge, that the
  information provided above is complete and correct.`;
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
	constructor() {}

	ngOnInit() {
		this.formValid = true;
		for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
			this.toggle[j] = false;
		}
		this.selected[0] = 0;
		this.toggle[0] = true;
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
			this.formValid = false;
			this.verify.emit();
		} else {
			this.formValid = true;
		}
	}

	countrySelectAction(val, i) {
		console.log("list" , val);
		console.log("list" , JSON.parse(val));
		const countryName = JSON.parse(val);
		if (val) {
			const data = {
				'countryDetails': JSON.parse(val) ,
				'index': i
			};
			this.countrySelect.emit(data);
		}
	}

	agree() {
		const formData = this.form.value;
		console.log("formData", formData);
		this.submitOwner.emit(formData);
	}
}
