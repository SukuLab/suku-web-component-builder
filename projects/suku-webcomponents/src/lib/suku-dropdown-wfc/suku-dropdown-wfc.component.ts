import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'suku-dropdown-wfc',
  templateUrl: './suku-dropdown-wfc.component.html',
  styleUrls: ['./suku-dropdown-wfc.component.scss']
})
export class SukuDropdownWfcComponent implements OnInit {
  _subscription;
  dropdownControl = new FormControl('');
  @Input() pattern;
  @Input() color = 'primary';
  @Input() data = [];
  @Input() keyValue = 'productName';
  @Input() displayKey = 'productName';
  @Input() placeholder = 'select product from this listing';
  @Input() formSumitAttempt;
  @Input() selectId = 'sttProductTraceability';
  @Input() errorMsg = 'Cannot be blank';
  @Input() customSelectClass = '';
  @Input() icon = 'suku-arrow-icon';
  @Input('icon-custom-class') iconCustomClass = 'arrow-icon';
  @Input('icon-id') iconId = 'arrow';
  @Output() select = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  @Input('enable-required-validator')
  set enableRequiredValidator(val) {
    console.log('enableRequiredValidator', val);
    if (val) {
      this.dropdownControl.setValidators(Validators.required);
      this.dropdownControl.updateValueAndValidity();
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
