import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SukuHomepageSection } from '../suku-homepage-section/suku-homepage-section';
import { sukuHomepageData } from './suku-homepage-data';

@Component({
	selector: 'suku-homepage',
	templateUrl: './suku-homepage.component.html',
	styleUrls: [ './suku-homepage.component.scss' ],
})
export class SukuHomepageComponent implements OnInit {
	homepageData: SukuHomepageSection[];

	@Output() sendRoutePath: EventEmitter<string> = new EventEmitter();

	constructor() {
		this.homepageData = sukuHomepageData;
	}

	ngOnInit() {}

	onSendRoutePath(string) {
		this.sendRoutePath.emit(string);
	}
}
