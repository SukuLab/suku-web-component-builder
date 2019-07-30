import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-file-upload',
  templateUrl: './suku-file-upload.component.html',
  styleUrls: ['./suku-file-upload.component.scss']
})
export class SukuFileUploadComponent implements OnInit {
  isHovering;
  @Input('enable-container') enableContainer = false;
  @Input('title-Id') titleId = 'heading';
  @Input('title-size') titleSize;
  @Input('title-color') titleColor = '#747470eb';
  @Input('title-weight') titleWeight = '600';
  @Input('custom-class') customClass = 'pt-4';
  @Input('drop-zone-height') dropZoneHeight = '12';
  @Input('drop-zone-width') dropZoneWidth = 'auto';
  @Input('img-height') imgHeight = '55';
  @Input('img-width') imgWidth = '';
  @Input('img-src') imgSrc = '../../../../assets/images/smartrac-upload-icon.png';
  @Input('file-input-id') fileInputId = 'file';
  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
    console.log('event', event);
  }

  startUpload(event: FileList) {
    console.log('event', event);
    this.action.emit(event);
  }

  upload(e) {
    console.log('file-upload');
    (<HTMLInputElement>document.getElementById('file')).click();
  }
}
