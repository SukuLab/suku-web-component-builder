import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'suku-loader',
  templateUrl: './suku-loader.component.html',
  styleUrls: ['./suku-loader.component.scss']
})
export class SukuLoaderComponent implements OnInit {

  @Input('waiting-message') waitingMessage = 'please wait...';
  @Input('loding-description') lodingDescription = 'The document you are downloading is being authenticated against the SUKU Blockchain.';
  @Input('loading-message') loadingMessage = 'Please wait momentarily while this process completes...'; @Input() dialogData = {
    'logo': '../../../assets/icons/icon-96x96.png',
    'logoCustomClass': '',
    'logoId': 'loaderIcon',
    'icon': 'fa fa-spinner fa-spin',
    'iconCustomClass': 'icon',
    'iconId': 'questionIcon',
    'titleOne': 'please wait...',
    'titleOneId': 'confirmation',
    'titleOneCustomClass': '',
    'titleTwo': 'The document you are downloading is being authenticated against the SUKU Blockchain.',
    'titleTwoId': '',
    'titleTwoCustomClass': '',
    'titleThree': 'Please wait momentarily while this process completes...',
    'titleThreeId': '',
    'titleThreeCustomClass': '',
    'titleBoxCustomClass': ''
  };
  constructor(public dialogCustomRef: MatDialogRef<SukuLoaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('Current data', this.data);
    for (const key of Object.keys(this.data)) {
      if (this.data[key]) {
        console.log(this.data[key], key);
        this.dialogData[key] = this.data[key];
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
