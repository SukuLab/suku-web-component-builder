import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
import * as _moment from 'moment';
import { Moment } from 'moment';
const moment = (_moment as any).default ? (_moment as any).default : _moment;

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
  @Input('start-date') startAt;
  @Input() formSumitAttempt;
  @Input() errorMsg = 'Cannot be blank';
	@Output() dateSelect = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  
	isFieldValid(field: string) {
		return (
			(!this.form.get(field).valid && this.form.get(field).touched) ||
			(this.form.get(field).untouched && this.formSumitAttempt)
		);
  }

  selectedDate(val) {
    console.log('this is value ',val._selected);
    const selectedDate = val._selected
    this.dateSelect.emit(selectedDate);
  }
}
