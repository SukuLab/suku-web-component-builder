import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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
  @Input('img-src') imgSrc = '';
  @Input('icon') icon = 'suku-upload-icon';
  @Input('icon-id') iconId = '';
  @Input('icon-custom-class') iconCustomClass = '';
  @Input('file-input-id') fileInputId = 'file';
  @Output() action = new EventEmitter();
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
    console.log('event', event);
  }

  startUpload(event: FileList) {
    const maxFileSize = 9999999;
    const file = event;
    if (event.length > 0) {
      for (let i = 0; i < event.length; i++) {
        if (event[i].type == 'image/jpeg' || event[i].type == 'image/png' || event[i].type == 'image/jpg' ||
          event[i].type == 'application/pdf') {
          if (event[i].size <= maxFileSize) {
            console.log('event', event[i]);
            const e = event[i];
            this.action.emit(e);
            (<HTMLInputElement>document.getElementById('file')).value = '';
          } else {
            this.snackbar('The file size cannot exceed 10 MB');
          }
        } else {
          this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
        }
      }
    }
  }

  upload(e) {
    console.log('file-upload');
    (<HTMLInputElement>document.getElementById('file')).click();
    e.stopPropagation();
  }

  snackbar(msg) {
    this.snackBar.open(msg, 'close', {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: 3500
    });
  }
}
