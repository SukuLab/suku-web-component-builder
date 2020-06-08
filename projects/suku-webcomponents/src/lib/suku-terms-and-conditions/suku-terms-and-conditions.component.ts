import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'suku-terms-and-conditions',
  templateUrl: './suku-terms-and-conditions.component.html',
  styleUrls: ['./suku-terms-and-conditions.component.scss']
})
export class SukuTermsAndConditionsComponent implements OnInit {
  termsandcondition: FormGroup;
  @Input('check-box-color') checkBoxColor = 'primary';
  @Input('title') title = 'Contract Terms & Conditions';
  @Input('title-color') titleColor;
  @Input('title-size') titleSize;
  @Input('title-weight') titleWeight;
  @Input('description') description = 'I Accept the terms and conditions and authorize this transaction.';
  @Input('description-custom-class') descriptionCustomClass = 'termsAndConditions';
  @Input('link-custom-class') linkCustomClass = 'link';
  @Input('link-one') linkOne = 'https://www.suku.world/terms';
  @Input('link-two') linkTwo = 'https://www.suku.world/privacy';
  @Input('link-name-one') linkOneTitle = 'Terms';
  @Input('link-name-two') linkTwoTitle = 'Privacy';
  @Input() control = 'contractTerms';

 @Output() action  = new EventEmitter();
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.termsandcondition = this.fb.group({
			'contractTerms': false
		});
  }

  action1() {
    const data = this.termsandcondition.value.contractTerms;
    this.action.emit(data);
  }

}
