import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'suku-create-customer-detail',
  templateUrl: './suku-create-customer.component.html',
  styleUrls: ['./suku-create-customer.component.css']
})
export class SukuCreateCustomerComponent implements OnInit {
  _data;
  _data1;
  @Input() form: FormGroup;
  @Input() firstName;
  @Input() controllerFirstName;
  @Input() lastName;
  @Input() controllerLastName;
  @Input() email;
  @Input() title;
  @Input() Address;
  @Input() dob;
  @Input() city;
  @Input() SSN;
  @Input() state;
  @Input() addressOne;
  @Input() postalCode;
  @Input() addressTwo;
  @Input() industryType;
  @Input() cityOne;
  @Input() businessName;
  @Input() stateOne;
  @Input() businessType;
  @Input() postalCodeOne;
  @Input() ein;
  @Input() country;
  @Input() checkboxOne;
  @Input() checkbox;
  @Input() countriesList;
	@Input() statesList;
  @Output() countrySelect = new EventEmitter();
  @Output() onFileChange = new EventEmitter();
  @Output() submit = new EventEmitter();
  @Output() onSubmit  = new EventEmitter();
  @Output() isFieldValid = new EventEmitter();
	@Output() stateSelect = new EventEmitter();
  @Input() businessTypeValue;
  @Input() industryTypeValue;

    constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
