import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SukuHomepageSection } from './suku-homepage-section';

@Component({
	selector: 'suku-homepage-section',
	templateUrl: './suku-homepage-section.component.html',
	styleUrls: [ './suku-homepage-section.component.scss' ],
})
export class SukuHomepageSectionComponent implements OnInit {
	@Input() sectionData: SukuHomepageSection;

	@Output() sendRoutePath: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	onSendRoutePath(string) {
		this.sendRoutePath.emit(string);
	}
}
