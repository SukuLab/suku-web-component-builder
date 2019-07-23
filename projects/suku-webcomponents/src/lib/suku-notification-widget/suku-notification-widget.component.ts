import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-notification-widget',
  templateUrl: './suku-notification-widget.component.html',
  styleUrls: ['./suku-notification-widget.component.scss']
})
export class SukuNotificationWidgetComponent implements OnInit {
  @Input() id;
  @Input() customclass = 'col box pointer text-center';
	@Input('notification-title') notificationTitle;
  @Input('notification-value') notificationValue;
  @Input('notification-title-custom-class') notificationTitleCustomClass="box-title";
  @Input('notification-value-custom-class') notificationValueCustomClass="box-counter";
  @Input('notification-value-color') notificationValueColor;
  @Input('notification-value-font-size') notificationValueFontSize;
  @Input('notification-title-color') notificationTitleColor;
  @Input('notification-title-font-size') notificationTitleFontSize;

  constructor() { }

  ngOnInit() {
  }

}
