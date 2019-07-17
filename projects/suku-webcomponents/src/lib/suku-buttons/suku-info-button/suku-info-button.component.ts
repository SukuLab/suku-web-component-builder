import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'suku-info-button',
	templateUrl: './suku-info-button.component.html',
	styleUrls: ['./suku-info-button.component.scss']
})
export class SukuInfoButtonComponent implements OnInit {
	@Input() id;
	@Input() size = '';
	@Input() weight = '600';
	@Input() type = 'info';
	@Input('custom-class') customClass = '';
	@Input('disable-value') disableValue: Boolean;
	@Output() action = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
