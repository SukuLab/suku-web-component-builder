import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'suku-creation-customer-fileupload',
  templateUrl: './suku-creation-customer-fileupload.component.html',
  styleUrls: ['./suku-creation-customer-fileupload.component.scss']
})
export class SukuCreationCustomerFileuploadComponent implements OnInit {
  imagepath;
  showMessage;
  showPdfErrorMsg;
  @Output() onFileChange = new EventEmitter();
  @Output() submitData = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("suku-creation-customer-fileupload");
  }

}
