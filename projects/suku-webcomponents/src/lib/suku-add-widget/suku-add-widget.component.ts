import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-add-widget',
	templateUrl: './suku-add-widget.component.html',
	styleUrls: [ './suku-add-widget.component.scss' ]
})
export class SukuAddWidgetComponent implements OnInit {
	@Input() image = '../../assets/images/map-pin.svg';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass = 'ml-2 add-widget mt-1';
	@Output() action = new EventEmitter();

	constructor() {}

	ngOnInit() {}
}
