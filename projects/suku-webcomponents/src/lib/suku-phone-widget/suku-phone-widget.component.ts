import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-phone-widget',
  templateUrl: './suku-phone-widget.component.html',
  styleUrls: ['./suku-phone-widget.component.scss']
})
export class SukuPhoneWidgetComponent implements OnInit {@Input() name = '4806069863';
@Input() size = '14';
@Input() color = '#3e3e3e';
@Input() weight = '500';
@Input() customClass = 'pl-2 mt-1 mb-1';
@Input() id = '';
  constructor() { }

  ngOnInit() {
  }

}
