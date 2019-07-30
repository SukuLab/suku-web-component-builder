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
    'titleOneCustomClass': '',
    'titleTwo': '',
    'titleTwoId': '',
    'titleTwoCustomClass': '',
    'titleThree': '',
    'titleThreeId': '',
    'titleThreeCustomClass': '',
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
    for (const key of Object.keys(this.data)) {
      if (this.data[key]) {
        this.dialogData[key] = this.data[key];
      }
    }
  }

  cancel() {
    this.dialogCustomRef.close(false);
  }

  submit() {
    this.dialogCustomRef.close(true);
  }

}
