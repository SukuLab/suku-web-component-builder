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
  constructor() { }

  ngOnInit() {
  }

}
