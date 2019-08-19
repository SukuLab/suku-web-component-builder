import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  constructor() { }

 
  ngOnInit() {
  }

}
