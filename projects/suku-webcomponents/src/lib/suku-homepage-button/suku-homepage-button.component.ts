import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';

@Component({
	selector: 'suku-homepage-button',
	templateUrl: './suku-homepage-button.component.html',
	styleUrls: [ './suku-homepage-button.component.scss' ],
})
export class SukuHomepageButtonComponent implements OnInit {
	@Input() buttonData: SukuHomepageButton;

	@Output() sendRoutePath: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	onClick() {
		if (!this.buttonData.disabled) {
			this.sendRoutePath.emit(this.buttonData.path);
		}
	}
}
