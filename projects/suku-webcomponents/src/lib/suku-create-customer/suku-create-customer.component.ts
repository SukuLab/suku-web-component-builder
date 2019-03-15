import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'suku-create-customer',
  templateUrl: './suku-create-customer.component.html',
  styleUrls: ['./suku-create-customer.component.scss']
})
export class SukuCreateCustomerComponent implements OnInit {

  _data;
  _data1;
  maxDate = "2001-03-11"
  @Input() form: FormGroup;
  @Input() formArrayNameValue;
  @Input() countriesList;
  @Input() statesList;
  @Input() DwollaTOScontrol;
  @Input() CitizensReserveTOScontrol;
  @Output() countrySelect = new EventEmitter();
  @Output() submitData = new EventEmitter();
  @Output() onSubmit  = new EventEmitter();
  @Output() stateSelect = new EventEmitter();
  @Output() industryTypeFun = new EventEmitter();
  @Output() businessTypeFun = new EventEmitter();
  @Input() ssnLimit;
  @Input() businessTypeValue;
  @Input() industryTypeValue;
  @Input() businessClassificationValue;
  DwollaTOSformValid: boolean;
  CitizensReserveTOSformValid: boolean;
  validateType: boolean;
   getControl;
  //  getControlcontroller;
  //  getControlAddress;
    constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.DwollaTOSformValid = true;
    this.CitizensReserveTOSformValid = true;
    this.validateType = true;
    this.getControl = this.form.get(this.formArrayNameValue)['controls'][0];
  }

  countrySelectAction(val,) {
    console.log("list" , val);
    console.log("list" , JSON.parse(val));
    if (val) {
        const data = {
            'countryDetails': JSON.parse(val) 
        };
        // console.log("data", this.form.get(this.arrayControlName));
        console.log("sdhhjhdsdcddscdscdsbhcdsbcjhd : " + data);
        this.countrySelect.emit(data);
    }
}
industryTypeFunAction(val,) {
  console.log("list" , val);
  console.log("list" , JSON.parse(val));

  if (val) {
      const data = {
          'industryType': JSON.parse(val) 
      };
      // console.log("data", this.form.get(this.arrayControlName));
      console.log("sdhhjhdsdcddscdscdsbhcdsbcjhd : " + data);
      this.industryTypeFun.emit(data);
  }
}

businessTypeFunAction(val,) {
  console.log("list" , val);
  this.validateTypeFun(val);
}

validateTypeFun(type) {
  const typevalue = type;
  if (typevalue == 'soleProprietorship' ) {
    this.validateType = true;
  } else {
    this.validateType = false;
  }
}
action1() {
  const controlName1 = this.CitizensReserveTOScontrol;
  const controlName2 = this.DwollaTOScontrol;
  if (this.form.get(controlName1).value && this.form.get(controlName2).value ) {
    this.CitizensReserveTOSformValid = false;
  } else {
    this.CitizensReserveTOSformValid = true;
  }
}

}
