import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-secondary-button',
	templateUrl: './suku-secondary-button.component.html',
	styleUrls: [ './suku-secondary-button.component.scss' ]
})
export class SukuSecondaryButtonComponent implements OnInit {
	@Input() id;
	@Input() size;
	@Input() color;
	@Output() trigger = new EventEmitter();

	constructor() {}

	ngOnInit() {}
}
