import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
// import { SukuModalService } from '../suku-modal/suku-modal.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'suku-add-license-modal',
  templateUrl: './suku-add-license-modal.component.html',
  styleUrls: ['./suku-add-license-modal.component.scss']
})

export class SukuAddLicenseModalComponent implements OnInit {
  formSumitAttempt = false;
  _subscriptionOne;
  _subscriptionTwo;
  _subscriptionThree;
  _subscriptionFour;
  _subscribeFiles;
  controlOneValue;
  controlTwoValue;
  dateControlOneValue;
  dateControlTwoValue;
  mulFiles = [];
  imagePreviewUrls = [];
  uploadFiles: any[];
  // uploadFiles = []; 

  @Input() dialogData = {
    controlOne: 'controlOne',
    controlTwo: 'controlTwo',
    dateControlOne: 'dateControlOne',
    dateControlTwo: 'dateControlTwo',
    'controlOnePatternEnabled': '',
    'controlTwoPatternEnabled': '',
    controlOneRequired: '',
    controlTwoRequired: '',
    controlTwoRequiredd: '',
    dateControlOneRequired: '',
    dateControlTwoRequired: '',
    'controlOnePattern': '',
    'controlTwoPattern': '',
    'title': 'Licence and Registration',
    'subTitle': 'Enter your license details here',
    'controlHint': 'Example: 123456789a12345',
    'hintClass': '',
    'headerCutomStyle': '',
    'startDateMaxDate': '',
    'endDateMaxDate': '',
    'startDateMinDate': '',
    'endDateMinDate': '',
    'controlOneId': 'licenseName',
    controlTwoId: 'licenseNumber',
    dateControlOneId: 'startDate',
    dateControlTwoId: 'endDate',
    controlTwoToolTip: 'The format should be 123456789a12345',
    controlOnePlaceholder: 'License Name',
    controlTwoPlaceholder: 'License Number',
    dateControlOnePlaceholder: 'Licence Issue Date',
    dateControlTwoPlaceholder: 'Licence Expiry Date(Optional)',
    controlOneRquiredErrorMsg: 'Cannot be blank.',
    controlTwoRquiredErrorMsg: 'Cannot be blank.',
    controlTwoPatternErrorMsg: 'Invalid Licence number',
    dateControlOneRquiredErrorMsg: 'Cannot be blank.',
    dateControlTwoRquiredErrorMsg: 'Cannot be blank.',
    acceptDocment: 'application/msword, text/plain, application/pdf, image/*',
    uploadImg: 'http://34.217.89.204/assets/images/fileUpload.png',
    uploadTitle: ' Upload Licence',
    fileListTitle: 'Uploaded Documents',
    fileInputId: 'file-input',
    filesArray: [],
    fileRemoveBtnTxt: 'Delete',
    fileRemoveBtnId: 'fileDelete',
    uploadImgAltTxt: '',
    cancelBtnText: 'Cancel',
    submitBtnTxt: 'Add License',
    submitBtnCustomClass: '',
    cancelBtnCustomClass: '',

  }

  controlOne = new FormControl('');
  controlTwo = new FormControl('');
  dateControlOne = new FormControl('');
  dateControlTwo = new FormControl('');
  // @Input('enable-required-validator-for-control-one')
  // set enableRequiredValidatorForControlOne(val) {
  //   if (val) {
  //     this.controlOne.setValidators(Validators.required);
  //     this.controlOne.updateValueAndValidity();
  //   }
  // }
  // @Input('enable-pattern-for-control-one')
  // set enablePatternValidatorsForControlOne(val) {
  //   if (val) {
  //     this.controlOne.setValidators(Validators.pattern(this.dialogData.controlOnePattern));
  //     this.controlOne.updateValueAndValidity();
  //   }
  // }
  // @Input('enable-required-validator-for-control-two')
  // set enableRequiredValidatorForControlTwo(val) {
  //   if (val) {
  //     this.controlTwo.setValidators(Validators.required);
  //     this.controlTwo.updateValueAndValidity();
  //   }
  // }
  // @Input('enable-pattern-for-control-two')
  // set enableRequiredValidatorsForDateControlOne(val) {
  //   if (val) {
  //     this.dateControlOne.setValidators(Validators.required);
  //     this.dateControlOne.updateValueAndValidity();
  //   }
  // }
  // @Input('enable-required-validator-for-dateControl-one')
  // set enableRequiredValidatorForDateControlTwo(val) {
  //   if (val) {
  //     this.dateControlTwo.setValidators(Validators.required);
  //     this.dateControlTwo.updateValueAndValidity();
  //   }
  // }
  constructor(private snackBar: MatSnackBar, public dialogCustomRef: MatDialogRef<SukuAddLicenseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // public sukuModalService: DynamicData
  ) {
  }

  ngOnInit() {

    for (const key of Object.keys(this.data)) {
      if (this.data[key]) {
        this.dialogData[key] = this.data[key];
      }
    }

    if (this.dialogData.controlOneRequired) {
      this.controlOne.setValidators(Validators.required);
      this.controlOne.updateValueAndValidity();
    }

    if (this.dialogData.controlTwoRequired) {
      this.controlTwo.setValidators(Validators.required);
      this.controlTwo.updateValueAndValidity();
    }

    if (this.dialogData.dateControlOneRequired) {
      this.dateControlOne.setValidators(Validators.required);
      this.dateControlOne.updateValueAndValidity();
    }

    if (this.dialogData.dateControlTwoRequired) {
      this.dateControlTwo.setValidators(Validators.required);
      this.dateControlTwo.updateValueAndValidity();
    }

    if (this.dialogData.controlTwoPatternEnabled && this.dialogData.controlTwoRequired) {
      this.controlTwo.setValidators([Validators.required, Validators.pattern(this.dialogData.controlTwoPattern)]);
      this.controlTwo.updateValueAndValidity();
    }

    // if (this.dialogData.controlOnePatternEnabled) {
    //   this.controlOne.setValidators(Validators.pattern(this.dialogData.controlOnePattern));
    //   this.controlOne.updateValueAndValidity();
    // }

    console.log('this.dialogData', this.dialogData);
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

    this._subscriptionThree = this.dateControlOne.valueChanges.subscribe(value => {
      if (value) {
        this.dateControlOneValue = value;
      } else {
        // this.usernameControl.
      }
    })

    this._subscriptionFour = this.dateControlTwo.valueChanges.subscribe(value => {
      if (value) {
        this.dateControlTwoValue = value;
      } else {
        // this.usernameControl.
      }
    })

    // this._subscribeFiles = this.getUploadedFiles().subscribe(value => {
    //     if (value) {
    //       this.uploadFiles = value;
    //     } else {
    //       // this.usernameControl.
    //     }
    // })
  }

  addLicense() {
    if (this.controlOne.invalid || this.controlTwo.invalid ||
      this.dateControlOne.invalid || this.dateControlTwo.invalid) {
      this.snackBar.open('Please fill all the mandatory fields.', 'close', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 5000
      });
    } else {
      let reqObj = {
        license: {
          licenseName: this.controlOneValue,
          licenseNumber: this.controlTwoValue,
          startDate: this.dateControlOneValue,
          endDate: this.dateControlTwoValue,
          files: this.mulFiles
        }
      }
      this.dialogCustomRef.close(reqObj);
    }
  }

  closeDialog() {
    this.dialogCustomRef.close(false);
  }

  startUpload(e) {
    let maxFileSize = 10097152;
    let currentFileSize;
    if (e.target.files && e.target.files.length > 0) {
      for (var i = 0; i < e.target.files.length; i++) {
        let file = e.target.files[i];
        currentFileSize = file.size;
        console.log('file.type', file.type)
        if (
          currentFileSize <= maxFileSize &&
          (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == '.pdf' ||
            file.type == 'application/rtf' || file.type == 'application/msword' ||
            file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/pdf')
        ) {
          this.mulFiles.push(e.target.files[i]);
          let reader = new FileReader();
          reader.onload = (e: any) => {
            this.imagePreviewUrls.push({ file: e.target.result, name: file.name });
          };
          reader.readAsDataURL(file);

        } else {
          this.snackBar.open('Upload Word, Image or PDF format of your License, Size should be below 10MB.', 'close', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 5000
          });
        }

      }
    }
  }

  removeFile(param) {
    this.mulFiles.splice(param, 1)
    console.log('param', param)
    this.imagePreviewUrls.splice(param, 1)
    console.log('param url', param)
  }

  downloadDoc(file) {
    console.log("this si what i am doing ", file);
    const name = file.name;
    const uri = file.file;
    const downloadLink = document.createElement("a");
    downloadLink.href = uri;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  snackbar(msg) {
    this.snackBar.open(msg, 'close', {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: 3500
    });
  }

}
