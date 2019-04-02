import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'suku-creation-customer-fileupload',
	templateUrl: './suku-creation-customer-fileupload.component.html',
	styleUrls: ['./suku-creation-customer-fileupload.component.scss']
})
export class SukuCreationCustomerFileuploadComponent implements OnInit {
	imagepath;
	showPdfErrorMsg;
	showMessage;
	docType = [];
	uploadType;
	documentType;
	_classification;
	fileArrayList = [];
	@Input() title = 'Document upload:';
	@Input()
	get classification() {
		return this._classification;
	}
	set classification(val) {
		console.log(val)
		this._classification = val;
	}
	@Output() OnFileChange = new EventEmitter();
	@Output() submitData = new EventEmitter();

	constructor(private snackBar: MatSnackBar) { }

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
			}
		];
	}

	imageType(val) {
		this.documentType = val;
		console.log('val', val);
		if (val) {
			this.uploadType = val
		}
	}

	fileupload(e) {
		console.log(e);
		if (this._classification == 'business') {
			this.documentType = true;
			this.uploadType = 'other';
		}
		if (this.documentType) {
			const files = e.target.files;
			const maxFileSize = 9999999;
			let currentFileSize;
			const file = e.target.files[0];
			currentFileSize = file.size;
			if (currentFileSize <= maxFileSize) {
				if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'application/pdf') {
					if (e.target.files && e.target.files.length > 0) {
						for (let i = 0; i < e.target.files.length; i++) {
							const file = e.target.files[i];
							const docType = this.uploadType;
							const data = {
								file: file,
								documentType: docType
							};
							this.fileArrayList.push(file);
							console.log("this.fileArrayList", this.fileArrayList);
							this.OnFileChange.emit(data);
							currentFileSize = file.size;
						}
						e.target.value = '';
					}
				} else {
					this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
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
