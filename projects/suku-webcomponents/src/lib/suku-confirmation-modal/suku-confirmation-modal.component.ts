import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({

  selector: 'suku-confirmation-modal',
  templateUrl: './suku-confirmation-modal.component.html',
  styleUrls: ['./suku-confirmation-modal.component.scss']
})
export class SukuConfirmationModalComponent implements OnInit {

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
    'buttonCustomClass': '',
    'messageId': '',
    'buttonId': '',
  };
  constructor(public dialogCustomRef: MatDialogRef<SukuConfirmationModalComponent>,
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

}
