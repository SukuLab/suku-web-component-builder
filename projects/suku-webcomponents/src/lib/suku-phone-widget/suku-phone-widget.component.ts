import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-phone-widget',
  templateUrl: './suku-phone-widget.component.html',
  styleUrls: ['./suku-phone-widget.component.scss']
})
export class SukuPhoneWidgetComponent implements OnInit {
  @Input() id = '';
  @Input() size = '0.9';
  @Input() color = '#3e3e3e';
  @Input() weight = '500';
  @Input() customClass = 'pl-3 mt-auto mb-auto';
  @Input('icon') icon = 'suku-phone-icon';
  @Input('icon-id') iconId = 'phoneIcon';
  @Input('icon-custom-class') iconCustomClass = 'icon';
  @Input('widget-custom-class') widgetCustomClass = 'col';
  constructor() { }

  ngOnInit() { }
}
