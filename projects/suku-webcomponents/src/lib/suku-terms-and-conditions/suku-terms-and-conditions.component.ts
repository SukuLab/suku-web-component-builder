import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'suku-terms-and-conditions',
  templateUrl: './suku-terms-and-conditions.component.html',
  styleUrls: ['./suku-terms-and-conditions.component.scss']
})
export class SukuTermsAndConditionsComponent implements OnInit {
  termsandcondition: FormGroup;
 @Output() action  = new EventEmitter();
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.termsandcondition = this.fb.group({
			'contractTerms': false
		});
  }
  // action(eventvalue)
  action1() {
    const data = this.termsandcondition.value.contractTerms
    this.action.emit(data);
  }

}
