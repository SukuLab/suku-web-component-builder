import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'suku-confirmation',
  templateUrl: './suku-confirmation.component.html',
  styleUrls: ['./suku-confirmation.component.scss']
})
export class SukuConfirmationComponent implements OnInit {
  @Input() dialogData = {
    'showCloseButton': false,
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
    'buttonLableOne': 'No',
    'buttonLableOneId': '',
    'buttonLableThreeId': 'buttonLableThreeId',
    'buttonLableTwo': 'Yes',
    'buttonLableTwoId': '',
    'buttonCustomClass': '',
    'buttonLableThree': 'Cancel'
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

  closeDialog() {
    this.dialogCustomRef.close('cancel');
  }

  cancel() {
    this.dialogCustomRef.close(false);
  }

  submit() {
    this.dialogCustomRef.close(true);
  }

}
