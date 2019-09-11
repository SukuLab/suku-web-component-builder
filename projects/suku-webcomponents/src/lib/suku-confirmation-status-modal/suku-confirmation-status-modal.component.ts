import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'suku-confirmation-status-modal',
  templateUrl: './suku-confirmation-status-modal.component.html',
  styleUrls: ['./suku-confirmation-status-modal.component.scss']
})
export class SukuConfirmationStatusModalComponent implements OnInit {

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
    submitBtnCustomClass: ''
  };
  constructor(public dialogCustomRef: MatDialogRef<SukuConfirmationStatusModalComponent>,
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
  }

  close() {
    this.dialogCustomRef.close(true);
  }
  submit(){

  }
}
