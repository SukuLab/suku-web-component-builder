import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-primary-button',
	templateUrl: './suku-primary-button.component.html',
	styleUrls: [ './suku-primary-button.component.scss' ]
})
export class SukuPrimaryButtonComponent implements OnInit {
	@Input() id = 'primary';
	@Input() customClass = 'btn-p btn-primary c-pointer';
	@Output() trigger = new EventEmitter();

	constructor() {}

	ngOnInit() {}
}
