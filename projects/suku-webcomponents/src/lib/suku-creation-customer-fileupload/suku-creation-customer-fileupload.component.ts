import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'suku-creation-customer-fileupload',
	templateUrl: './suku-creation-customer-fileupload.component.html',
	styleUrls: [ './suku-creation-customer-fileupload.component.scss' ]
})
export class SukuCreationCustomerFileuploadComponent implements OnInit {
	@Output() onFileChange = new EventEmitter();
	@Output() submitData = new EventEmitter();
	imagepath;
	showPdfErrorMsg;
	showMessage;
  docType = [];
  uploadType;
  documentType;
	constructor(private snackBar: MatSnackBar) {}

	ngOnInit() {
		console.log('suku-creation-customer-fileupload');
		this.docType = [
			{
				name: 'passport',
				value: 'passport'
			},
			{
				name: 'license',
				value: 'license'
			},
			{
				name: 'idCard',
				value: 'idCard'
			},
			{
				name: 'other',
				value: 'other'
			}
		];
	}

	imageType(val) {
    this.documentType = val;
    console.log('val', val);
    if(val) {
      this.uploadType = val
    }
	}

	fileupload(e) {
    console.log(e);
    if(this.documentType) {
		const files = e.target.files;
		const maxFileSize = 9999999;
		let currentFileSize;
		const file = e.target.files[0];
		currentFileSize = file.size;
		if (currentFileSize <= maxFileSize) {
			if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg') {
				if (e.target.files && e.target.files.length > 0) {
					for (let i = 0; i < e.target.files.length; i++) {
            const file = e.target.files[i];
            const docType = this.uploadType;
						const data = {
              file : file,
              documentType: docType
            };
						this.onFileChange.emit(data);
						currentFileSize = file.size;
					}
					e.target.value = '';
				}
			} else {
        this.snackbar('The file type jpg/jpeg/png files are allowed!');
			}
		} else {
			this.snackbar('The file size cannot exceed 10 MB');
    }
  } else {
    this.snackbar('Please select document type.');
  }
	}

	snackbar(msg) {
		this.snackBar.open(msg, 'close', {
			verticalPosition: 'bottom',
			horizontalPosition: 'right',
			duration: 3500
		});
	}
}