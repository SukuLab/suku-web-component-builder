import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-mail-widget',
  templateUrl: './suku-mail-widget.component.html',
  styleUrls: ['./suku-mail-widget.component.scss']
})
export class SukuMailWidgetComponent implements OnInit {
  // @Input() name = 'dconway@vairog.com';
  @Input() id = 'suku-mail-widget';
  @Input() size = '0.9';
  @Input() color = '#0f0f0f';
  @Input() weight = '';
  @Input() customClass = 'pl-3 pt-0 mb-1';
  @Input() icon = 'suku-mail-icon';
  @Input('icon-id') iconId = 'mailIcon';
  @Input('icon-custom-class') iconCustomClass = '';
  @Input() imageWidth = 'img-width';
  @Input('widget-custom-class') widgetCustomClass = 'col mt-2';
  constructor() {}

  ngOnInit() {}
}
