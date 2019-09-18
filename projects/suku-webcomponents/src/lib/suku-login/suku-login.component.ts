import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'suku-login',
  templateUrl: './suku-login.component.html',
  styleUrls: ['./suku-login.component.scss']
})
export class SukuLoginComponent implements OnInit {
  hide;
  remeberMeValue;
  _enableRequiredValidator = new BehaviorSubject('');
  @Input() color = 'primary';
  usernameControl = new FormControl('');
  @Input('placeholder-one') placeholderOne = 'Username';
  @Input('user-name-id') userNameId = 'Username';
  passwordControl = new FormControl('');
  @Input('placeholder-two') placeholderTwo = 'Password';
  @Input('password-id') passwordId = 'password';
  @Input('custom-class') customClass;
  @Input('enable-user-icon') enableUserIcon = true;
  @Input('error-message-one') errorMessageOne = 'cannot be blank.';
  @Input('error-message-two') errorMessageTwo = 'cannot be blank.';
  @Input('error-message-three') errorMessageThree = '';
  @Input('error-message-four') errorMessageFour = '';
  @Input('remeberMeChecked') remeberMeChecked;
  @Input('snackbar-message') snackbarMessage = 'Invalid Input.';
  @Input('enable-required-validator')
  get enableRequiredValidator() {
    console.log('_enableRequiredValidator', this._enableRequiredValidator);
    return this._enableRequiredValidator.value;
  }
  set enableRequiredValidator(val) {
    console.log('enableRequiredValidator', val);
    if (val === 'true') {
      const data = val.toString();
      this._enableRequiredValidator.next(data);
      this.usernameControl.setValidators(Validators.required);
      this.usernameControl.updateValueAndValidity();
      this.passwordControl.setValidators(Validators.required);
      this.passwordControl.updateValueAndValidity();
    }
  }
  @Input()
  set value(val) {
    console.log('val', val);
    if (val){
    if (val.username && val.password) {
      this.usernameControl.patchValue(val.username);
      this.passwordControl.patchValue(val.password);
    }
    }
  }
  @Output() formSubmit = new EventEmitter();
  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  remeberMeAction(e) {
    this.remeberMeValue = e;
  }

  onSubmit() {
    if (this._enableRequiredValidator.value == 'true') {
      if (this.usernameControl.value && this.passwordControl.value) {
        const data = {
          username: this.usernameControl.value,
          password: this.passwordControl.value,
          rememberMe: this.remeberMeValue || this.remeberMeChecked
        };
        console.log(data);
        this.formSubmit.emit(data);
      } else {
        this.snackbar(this.snackbarMessage);
      }
    } else {
      const data = {
        username: this.usernameControl.value,
        password: this.passwordControl.value,
        rememberMe: this.remeberMeValue
      };
      console.log(data);
      this.formSubmit.emit(data);
    }
  }

  snackbar(msg) {
    this.snackBar.open(msg, 'close', {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: 3500
    });
  }

}
