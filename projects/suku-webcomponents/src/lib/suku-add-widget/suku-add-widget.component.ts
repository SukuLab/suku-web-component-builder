import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-add-widget',
	templateUrl: './suku-add-widget.component.html',
	styleUrls: ['./suku-add-widget.component.scss']
})
export class SukuAddWidgetComponent implements OnInit {
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() id = 'addNewSellListing';
	@Input() icon = 'fa fa-plus';
	@Input() customClass = 'add-widget c-pointer';
	@Input() iconId = 'icon';
	@Input() iconColor;
	@Input() iconCustomClass = '';
	@Output() action = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
