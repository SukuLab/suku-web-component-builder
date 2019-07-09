import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'suku-confirmation',
  templateUrl: './suku-confirmation.component.html',
  styleUrls: ['./suku-confirmation.component.scss']
})
export class SukuConfirmationComponent implements OnInit {
  @Input() dialogData = {
    'icon': 'fa fa-question',
    'iconCustomClass': '',
    'iconId': 'questionIcon',
    'titleOne': 'Test',
    'titleOneId': 'confirmation',
    'titleTwo': '',
    'titleTwoId': '',
    'titleThree': '',
    'titleThreeId': '',
    'titleBoxCustomClass': '',
    'buttonLableOne': 'Cancel',
    'buttonLableOneId': '',
    'buttonLableTwo': 'Submit',
    'buttonLableTwoId': '',
    'buttonCustomClass': ''
  };
  constructor(public dialogCustomRef: MatDialogRef<SukuConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('Current data', this.data);
    for (const key of Object.keys(this.data)) {
      if (this.data[key]) {
        console.log(this.data[key], key);
        // if (this.dialogData[this.data[key]]) {
        this.dialogData[key] = this.data[key];
        // }
      }
    }
    console.log('dialogData', this.dialogData);
  }

  cancel() {
    this.dialogCustomRef.close(false);
  }

  submit() {
    this.dialogCustomRef.close(true);
  }

}
