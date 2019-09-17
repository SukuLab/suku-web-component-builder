import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'suku-confirmation-status-modal',
  templateUrl: './suku-confirmation-status-modal.component.html',
  styleUrls: ['./suku-confirmation-status-modal.component.scss']
})
export class SukuConfirmationStatusModalComponent implements OnInit {

  controlOneValue;
  controlTwoValue;
  @Input() dialogData = {
    'imgSrc': '',
    'imgId': '',
    'icon': '',
    'iconId': 'suku-icon',
    'iconCustomClass': 'suku-xl',
    'message': '',
    'description': '',
    'loader': 'disable',
    'buttonText': '',
    'messageCustomClass': '',
    'descriptionCustomClass': '',
    'descriptionOneCustomClass': '',
    'descriptionOne': '',
    'buttonCustomClass': '',
    'messageId': '',
    'buttonId': '',
    cancelBtnText: 'Cancel',
    submitBtnTxt: 'Confirm',
    cancelBtnCustomClass: '',
    submitBtnCustomClass: '',
    controlOne: 'controlOne',
    controlTwo: 'controlTwo',
    controlTwoRequired: '',
    controlOneId: 'contentOne',
    controlTwoId: 'ContentTwo',
    controlOnePlaceholder: 'Tracking Number (Optional)',
    controlTwoPlaceholder: 'Comments*',
    controlTwoRquiredErrorMsg : 'Cannot be blank.'

  };
  controlOne = new FormControl('');
  controlTwo = new FormControl('');
  _subscriptionTwo;
  _subscriptionOne;
  constructor(public dialogCustomRef: MatDialogRef<SukuConfirmationStatusModalComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.modalData) {
      this.data.modalData.subscribe((val) => {
        console.log('data--', val);
        if (val) {
          for (const key of Object.keys(val)) {
            if (val[key]) {
              this.dialogData[key] = val[key];
            }
          }

        }
      });
    }
    if (this.dialogData.controlTwoRequired) {
      this.controlTwo.setValidators(Validators.required);
      this.controlTwo.updateValueAndValidity();
    }
    this._subscriptionOne = this.controlOne.valueChanges.subscribe(value => {
      if (value) {
        this.controlOneValue = value;
      } else {
        // this.usernameControl.
      }
    })
    this._subscriptionTwo = this.controlTwo.valueChanges.subscribe(value => {
      if (value) {
        this.controlTwoValue = value;
      } else {
        // this.usernameControl.
      }
    })
  }

  close() {
    this.dialogCustomRef.close(true);
  }
  submit() {
    console.log("this is called :",this.controlTwo.invalid);
    if (this.controlTwo.invalid) {
      this.snackBar.open('Please fill all the mandatory fields.', 'close', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 5000
      });
    } else {
      let reqObj = {
        Comments: {
          trackingId: this.controlOneValue,
          comments: this.controlTwoValue,
        }
      }
      console.log("thi sis sls :",reqObj);
      this.dialogCustomRef.close(reqObj);
    }
  }
}
