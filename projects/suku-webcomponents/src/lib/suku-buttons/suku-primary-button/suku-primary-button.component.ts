import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-primary-button',
	templateUrl: './suku-primary-button.component.html',
	styleUrls: ['./suku-primary-button.component.scss']
})
export class SukuPrimaryButtonComponent implements OnInit {
	@Input() id = 'primary';
	@Input() size = '1';
	@Input() color = '';
	@Input() weight = '600';
	@Input('btnType') btnType = 'button';
	@Input('disable-value') disableValue: Boolean;
	@Input('custom-class') customClass = '';
	@Output() action = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
