import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';

@Component({
	selector: 'suku-dropdown',
	templateUrl: './suku-dropdown.component.html',
	styleUrls: [ './suku-dropdown.component.scss' ]
})
export class SukuDropdownComponent implements OnInit {
  @Input() form: FormGroup;
	@Input() control = 'productTraceability';
	@Input() data = [];
	@Input() icon = '../assets/images/arrow-icon.png';
	@Output() select = new EventEmitter();

	constructor() {}

	ngOnInit() {}
}
