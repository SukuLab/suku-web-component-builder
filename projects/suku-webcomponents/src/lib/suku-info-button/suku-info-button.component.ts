import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'suku-info-button',
	templateUrl: './suku-info-button.component.html',
	styleUrls: [ './suku-info-button.component.scss' ]
})
export class SukuInfoButtonComponent implements OnInit {
	@Input() name;
	@Input() id;
	@Input() size;
	@Input() disableValue: Boolean;
	@Output() trigger = new EventEmitter();

	constructor() {}

	ngOnInit() {}
}
