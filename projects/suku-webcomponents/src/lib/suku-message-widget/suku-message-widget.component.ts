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
  @Output() action = new EventEmitter();
  @Output() textCount = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitData(length) {
    const value = this.textAreaControl.value;
    console.log('text', value);
    this.action.emit(value);
    this.textCount.emit(length)
  }

}
