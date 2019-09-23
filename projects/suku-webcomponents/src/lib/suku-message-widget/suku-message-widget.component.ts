import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'suku-message-widget',
  templateUrl: './suku-message-widget.component.html',
  styleUrls: ['./suku-message-widget.component.scss']
})
export class SukuMessageWidgetComponent implements OnInit {
  textAreaControl = new FormControl();
  @Input() row = 15;
  @Input() col = 22;
  @Input() id = 'message';
  @Input() customClass;
  @Input() maxlength = 500;
  @Input() readOnly;
  @Input() value = '';
  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitData() {
    const value = this.textAreaControl.value;
    console.log('text', value);
    this.action.emit(value);
  }

  checkSpcialChar(event) {
    if (event.charCode == 36 ||
      event.charCode == 95 ||
      event.charCode == 42 ||
      event.charCode == 45 ||
      event.charCode == 43 ||
      event.charCode == 40 ||
      event.charCode == 41 ||
      event.charCode == 39 ||
      event.charCode == 33
    ) {
      event.returnValue = true;
      return true;
    }

    if (!((event.charCode >= 65) && (event.charCode <= 90) ||
      (event.charCode >= 97) && (event.charCode <= 122) || (event.charCode >= 48) &&
      (event.charCode <= 57))) {
      event.returnValue = false;
      return false;
    }
    event.returnValue = true;
    return true;
  }

}
