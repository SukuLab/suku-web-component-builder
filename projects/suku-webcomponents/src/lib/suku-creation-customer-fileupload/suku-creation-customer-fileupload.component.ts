import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'suku-creation-customer-fileupload',
  templateUrl: './suku-creation-customer-fileupload.component.html',
  styleUrls: ['./suku-creation-customer-fileupload.component.scss']
})
export class SukuCreationCustomerFileuploadComponent implements OnInit {
  
  @Output() onFileChange = new EventEmitter();
  @Output() submitData = new EventEmitter();
  imagepath;
  showPdfErrorMsg;
  showMessage;

  constructor() { }

  ngOnInit() {
    console.log("suku-creation-customer-fileupload");
  }
  fileupload(e){
    console.log(e)
    const files = e.target.files;
		const maxFileSize = 2100000;
		let currentFileSize;
		if (e.target.files && e.target.files.length > 0) {
			for (let i = 0; i < e.target.files.length; i++) {
				const file = e.target.files[i];
				this.onFileChange.emit(file);
				currentFileSize = file.size;
			}
		}
  }
}
