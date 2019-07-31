import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'suku-checkbox',
  templateUrl: './suku-checkbox.component.html',
  styleUrls: ['./suku-checkbox.component.scss']
})
export class SukuCheckboxComponent implements OnInit {
  _subscription;
  @Input('checkbox-id') checkboxId = 'suku-checkbox';
  @Input('custom-class') customClass = '';
  @Input() color = 'primary';
  @Input() control;
  @Input()
  set checked(val) {
    if (val) {
      this.checkBoxControl.patchValue(val);
    }
  }
  @Input() indeterminate;
  @Input() labelPosition = 'after';
  @Input()
  set disabled(value) {
    console.log(value);
    if (value) {
      this.checkBoxControl.disable();
    } else {
      this.checkBoxControl.enable();
    }
  }
  checkBoxControl = new FormControl();
  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this._subscription = this.checkBoxControl.valueChanges.subscribe(value => {
      this.action.emit(value);
      console.log('checkBoxControl', value);
    });
  }

  ngDestroy() {
    this._subscription.unsubscribe();
  }

}
