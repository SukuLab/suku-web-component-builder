import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'suku-search-widget',
  templateUrl: './suku-search-widget.component.html',
  styleUrls: ['./suku-search-widget.component.scss']
})
export class SukuSearchWidgetComponent implements OnInit {
  @Input('search-field-font-size') searchFieldFontSize = 16;
  @Input('search-field-placeholder') searchFiledPlaceHolder = 'Search here...';
  @Input('search-field-font-color') searchFieldFontColor = 'black';
  @Input('fieldId') fieldId = 'fieldId';
  @Input('fieldValue') fieldValue = 'fieldValue';
  @Input('buttonId') buttonId = 'buttonId';
  @Input('buttonName') buttonName = 'buttonName';
  @Input('buttonFontSize') buttonFontSize;	
  @Input('buttonFontWeight') buttonFontWeight;
  @Input('searchFieldFontWeight') searchFieldFontWeight;
  _subscription;
  searchControl = new FormControl('');
  @Input() pattern;
  @Input() color = 'primary';
  @Input() placeholder = 'Username';
  @Input('custom-class') customClass;
  @Input('enable-user-icon') enableUserIcon = true;
  @Input('error-message-one') errorMessageOne = 'Cannot be blank.';
  @Input('error-message-two') errorMessageTwo = 'Invalid value.';
  @Input('error-message-three') errorMessageThree = '';
  @Input('error-message-four') errorMessageFour = '';
  @Input('value')
  set value(val) {
    if (val) {
      this.searchControl.patchValue(val);
    } else {
      this.searchControl.patchValue(val);
      // this.searchControl.enable();
    }
  }  
  @Input('disabled')
  set disable(val) {
    if (val) {
      this.searchControl.disable();
    } else {
      this.searchControl.enable();
    }
  }
  @Input('enable-required-validator')
  set enableRequiredValidator(val) {
    console.log('enableRequiredValidator', val);
    if (val) {
      this.searchControl.setValidators(Validators.required);
      this.searchControl.updateValueAndValidity();
    }
  }
  @Input('enable-pattern-validator')
  set enablePatternValidators(val) {
    if (val) {
      this.searchControl.setValidators([Validators.required, Validators.pattern(this.pattern)]);
      this.searchControl.updateValueAndValidity();
    }
  }
  @Input('enable-max-len-validator')
  set enableMaxLenValidators(val) {
    console.log('enableMaxValidator', val);
    if (val) {
      this.searchControl.setValidators(Validators.maxLength(val));
      this.searchControl.updateValueAndValidity();
    }
  }
  @Input('enable-min-len-validator')
  set enableMinLenValidators(val) {
    console.log('enableMinValidator', val);
    if (val) {
      this.searchControl.setValidators(Validators.minLength(val));
      this.searchControl.updateValueAndValidity();
    }
  }
  @Output() action = new EventEmitter();
  @Output() getValue = new EventEmitter();
  @Output() onChangeAction = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this._subscription = this.searchControl.valueChanges.subscribe(value => {
      if (value) {
        const controlValue = {
          dirty: this.searchControl.dirty,
          disabled: this.searchControl.disabled,
          enabled: this.searchControl.enabled,
          errors: this.searchControl.errors,
          invalid: this.searchControl.invalid,
          pristine: this.searchControl.pristine,
          status: this.searchControl.status,
          touched: this.searchControl.touched,
          untouched: this.searchControl.untouched,
          valid: this.searchControl.valid,
          validator: this.searchControl.validator,
          value: this.searchControl.value
        };
        this.action.emit(controlValue);
      } else {
        // this.searchControl.
      }
      console.log('searchControl', this.searchControl);
    });
  }

  getErrorMessage() {
    return this.searchControl.hasError('required') ? 'You must enter a value' :
      this.searchControl.hasError('minlength') ? 'username should be more than 2 letters' :
        '';
  }

  getFieldValue() {
  	const value = this.searchControl.value;
  	this.getValue.emit(value)
  }

  ngDestroy() {
    this._subscription.unsubscribe();
  }

}
