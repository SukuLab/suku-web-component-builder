import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'suku-user-input',
  templateUrl: './suku-user-input.component.html',
  styleUrls: ['./suku-user-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SukuUserInputComponent implements OnInit {
  _subscription;
  usernameControl = new FormControl('');
  @Input() pattern;
  @Input() color = 'primary';
  @Input() placeholder = 'Username';
  @Input('custom-class') customClass;
  @Input('enable-user-icon') enableUserIcon = true;
  @Input('error-message-one') errorMessageOne = 'cannot be blank.';
  @Input('error-message-two') errorMessageTwo = '';
  @Input('error-message-three') errorMessageThree = '';
  @Input('error-message-four') errorMessageFour = '';
  @Input('enable-required-validator')
  set enableRequiredValidator(val) {
    console.log('enableRequiredValidator', val);
    if (val) {
      this.usernameControl.setValidators(Validators.required);
      this.usernameControl.updateValueAndValidity();
    }
  }
  @Input('enable-pattern-validator')
  set enablePatternValidators(val) {
    if (val) {
      this.usernameControl.setValidators(Validators.pattern(this.pattern));
      this.usernameControl.updateValueAndValidity();
    }
  }
  @Input('enable-max-len-validator')
  set enableMaxLenValidators(val) {
    console.log('enableMaxValidator', val);
    if (val) {
      this.usernameControl.setValidators(Validators.maxLength(val));
      this.usernameControl.updateValueAndValidity();
    }
  }
  @Input('enable-min-len-validator')
  set enableMinLenValidators(val) {
    console.log('enableMinValidator', val);
    if (val) {
      this.usernameControl.setValidators(Validators.minLength(val));
      this.usernameControl.updateValueAndValidity();
    }
  }
  @Output() action = new EventEmitter();
  email = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
    this._subscription = this.usernameControl.valueChanges.subscribe(value => {
      if (value) {
        this.action.emit(value);
      } else {
        // this.usernameControl.
      }
      console.log('usernameControl', this.usernameControl);
    });
  }

  getErrorMessage() {
    return this.usernameControl.hasError('required') ? 'You must enter a value' :
      this.usernameControl.hasError('minlength') ? 'username should be more than 2 letters' :
        '';
  }

  ngDestroy() {
    this._subscription.unsubscribe();
  }
}

