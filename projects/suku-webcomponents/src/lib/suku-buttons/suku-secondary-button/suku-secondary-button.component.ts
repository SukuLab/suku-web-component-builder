import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-secondary-button',
	templateUrl: './suku-secondary-button.component.html',
	styleUrls: ['./suku-secondary-button.component.scss']
})
export class SukuSecondaryButtonComponent implements OnInit {
	@Input() id;
	@Input() size = 1.5;
	@Input() weight;
	@Input() color;
	@Input('custom-class') customClass;
	@Output() action = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
