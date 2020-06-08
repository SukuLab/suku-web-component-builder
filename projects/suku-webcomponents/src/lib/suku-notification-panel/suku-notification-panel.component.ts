import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-notification-panel',
	templateUrl: './suku-notification-panel.component.html',
	styleUrls: [ './suku-notification-panel.component.scss' ]
})
export class SukuNotificationPanelComponent implements OnInit {
	@Input() title = 'Dashboard';
	@Input() customclass = 'col p-0 box pointer text-center';
	@Input() notificationArray = [];
	@Output() action = new EventEmitter();

	constructor() {}

	ngOnInit() {}

}
