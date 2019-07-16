import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SukuHomepageButton } from './suku-homepage-button';

@Component({
	selector: 'suku-homepage-button',
	templateUrl: './suku-homepage-button.component.html',
	styleUrls: ['./suku-homepage-button.component.scss'],
})
export class SukuHomepageButtonComponent implements OnInit {
	@Input('title-id') titleId;
	@Input('title-custom-class') titleCustomClass;
	@Input('icon-custom-class') iconCustomClass;
	@Input('suku-button-custom-class') sukuButtonCustomClass;
	@Input('button-data') buttonData: SukuHomepageButton;
	@Output('send-route-path') sendRoutePath: EventEmitter<string> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onClick() {
		console.log('this.buttonData.path', this.buttonData.path);
		if (!this.buttonData.disabled) {
			this.sendRoutePath.emit(this.buttonData.path);
		}
	}
}
