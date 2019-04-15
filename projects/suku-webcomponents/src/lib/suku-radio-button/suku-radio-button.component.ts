import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'suku-radio-button',
	templateUrl: './suku-radio-button.component.html',
	styleUrls: [ './suku-radio-button.component.scss' ]
})
export class SukuRadioButtonComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control = 'traceabilityProduct';
  @Input() content = 'using an id';
	@Input() contentCustomClass = 'traceSelectedProd';
	@Input() radioButtonId = 'sukuRadioButton';
	@Input() color = 'primary';
	@Input() value = 1;
	@Output() action = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	buttonAction() {
		this.action.emit();
	}
}
