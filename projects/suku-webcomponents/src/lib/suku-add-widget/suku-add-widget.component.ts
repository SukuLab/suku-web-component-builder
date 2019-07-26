import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-add-widget',
	templateUrl: './suku-add-widget.component.html',
	styleUrls: ['./suku-add-widget.component.scss']
})
export class SukuAddWidgetComponent implements OnInit {
	@Input() id = 'addWidget';
	@Input() size = '0.9';
	@Input() color = '';
	@Input() weight = '500';
	@Input() customClass = 'pl-3 mt-auto mb-auto';
	@Input('icon') icon = 'suku-plus-icon';
	@Input('icon-id') iconId = 'plusIcon';
	@Input('icon-custom-class') iconCustomClass = 'icon';
	@Input('widget-custom-class') widgetCustomClass = 'col';
	@Output() action = new EventEmitter();
	constructor() { }

	ngOnInit() { }
}
