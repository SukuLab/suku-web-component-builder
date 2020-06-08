import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'suku-dropdown-wfc',
  templateUrl: './suku-dropdown-wfc.component.html',
  styleUrls: ['./suku-dropdown-wfc.component.scss']
})
export class SukuDropdownWfcComponent implements OnInit {
  _subscription;
  @Input('form') peerForm: NgForm;
  dropdownControl = new FormControl('');
  @Input() pattern;
  @Input() color = 'primary';
  @Input() data = [];
  @Input() keyValue = 'productName';
  @Input() displayKey = 'productName';
  @Input() placeholder = 'select product from this listing';
  @Input() formSumitAttempt;
  @Input() selectId = 'sttProductTraceability';
  @Input() errorMsg = 'Cannot be blank.';
  @Input() errorMsgTwo = 'Duplicate lotId.';
  @Input() customSelectClass = '';
  @Input() icon = 'suku-dropdown-icon';
  @Input('icon-custom-class') iconCustomClass = 'arrow-icon';
  @Input('icon-id') iconId = 'arrow';
  @Input()
  set disabled(val) {
    if (val) {
      this.dropdownControl.disable();
    } else {
      this.dropdownControl.enable();
    }
  }
  @Input()
  set value(val) {
    console.log('val', val);
    if (val) {
      this.dropdownControl.patchValue(val);
    }
  }
  @Input('enable-required-validator')
  set enableRequiredValidator(val) {
    console.log('enableRequiredValidator', val);
    if (val) {
      this.dropdownControl.setValidators(Validators.required);
      this.dropdownControl.updateValueAndValidity();
    }
  }
  @Output() select = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


}

export function duplicate(c: FormControl): any {
  console.log('parent', c);
  if (c.value) {
    if (c.parent.controls['amount'].value <= 0 || c.parent.controls['amount'].value > c.parent.controls['balance'].value) {
      return { duplicate: true };
    } else {
      return null;
    }
  }
  return null;
}
