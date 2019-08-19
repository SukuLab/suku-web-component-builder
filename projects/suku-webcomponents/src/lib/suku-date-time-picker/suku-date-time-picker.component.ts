import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';

@Component({
  selector: 'suku-date-time-picker',
  templateUrl: './suku-date-time-picker.component.html',
  styleUrls: ['./suku-date-time-picker.component.scss']
})
export class SukuDateTimePickerComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() control = 'controlName';
  @Input('place-holder') placeholder = 'Date picker';
  @Input('id') dateId = 'datepicker';
  @Input('max-date') max;
  @Input('min-date') min;
  @Input() formSumitAttempt;
  constructor() { }

  ngOnInit() { }
  
	isFieldValid(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSumitAttempt)
		);
	}
}
