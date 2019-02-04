import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-notification-widget',
  templateUrl: './suku-notification-widget.component.html',
  styleUrls: ['./suku-notification-widget.component.scss']
})
export class SukuNotificationWidgetComponent implements OnInit {
  @Input() id;
  @Input() notificationCount = "notificationCountId"
  @Input() customclass = 'col p-0 pointer text-center';
	@Input('notification-title') notificationTitle;
	@Input('notification-value') notificationValue;
  constructor() { }

  ngOnInit() {
  }

}
