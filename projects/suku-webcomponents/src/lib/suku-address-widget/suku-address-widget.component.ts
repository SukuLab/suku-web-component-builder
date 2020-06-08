import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-address-widget',
  templateUrl: './suku-address-widget.component.html',
  styleUrls: ['./suku-address-widget.component.scss']
})
export class SukuAddressWidgetComponent implements OnInit {
  @Input() id = '';
  @Input() size = '0.9';
  @Input() color = '#3e3e3e';
  @Input() weight = '500';
  @Input() customClass = 'pl-3 mt-auto mb-auto';
  @Input('icon') icon = 'suku-map-pin';
  @Input('icon-id') iconId = 'phoneIcon';
  @Input('icon-custom-class') iconCustomClass = 'custom-icon';
  @Input('widget-custom-class') widgetCustomClass = 'col';
  constructor() { }

  ngOnInit() { }
}
