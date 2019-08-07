import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'suku-confirmation-model',
  templateUrl: './suku-confirmation-model.component.html',
  styleUrls: ['./suku-confirmation-model.component.scss']
})
export class SukuConfirmationModelComponent implements OnInit {

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
  }
  
  constructor(public dialogCustomRef: MatDialogRef<SukuConfirmationModelComponent>,
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
