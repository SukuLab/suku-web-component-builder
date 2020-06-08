import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-select-input',
	templateUrl: './suku-select-input.component.html',
	styleUrls: [ './suku-select-input.component.scss' ]
})
export class SukuSelectInputComponent implements OnInit {
	@Input() name = 'ADD INTEREST';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customclass;
	@Input() keyValue = 'value';
	@Input() displayKey = 'name'
	@Input() titleText = 'Sort by';
	@Input() placeHolder = 'Choose sort method';
	@Input() imgheight = '18';
	@Input() imgwidth = '20';
	@Input() imgurl = '';
  @Input('image-custom-class') imageCustomClass = '';
  @Input('icon') icon = 'suku-arrow-icon';
  @Input('icon-id') iconId = '';
  @Input('icon-custom-class') iconCustomClass = '';
	@Output() sort = new EventEmitter();
	@Input() options: any[];

	constructor() {
		this.options = [
			{
				name: 'Matches-Low to High',
				value: '0'
			},
			{
				name: 'Matches-High to Low',
				value: '1'
			},
			{
				name: 'Z to A',
				value: '2'
			},
			{
				name: 'A to Z',
				value: '3'
			}
		];
	}

	ngOnInit() {
	}
}
