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
  	'message': '',
  	'description': '',
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
  	for (const key of Object.keys(this.data)) {
      if (this.data[key]) {
        this.dialogData[key] = this.data[key];
      }
    }
  }

  close() {
	this.dialogCustomRef.close();
  }

}
