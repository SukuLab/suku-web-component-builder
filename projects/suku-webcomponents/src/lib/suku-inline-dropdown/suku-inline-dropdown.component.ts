import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'suku-inline-dropdown',
  templateUrl: './suku-inline-dropdown.component.html',
  styleUrls: ['./suku-inline-dropdown.component.scss']
})
export class SukuInlineDropdownComponent implements OnInit {
	@Input() size = '14';
	@Input() color = '#757575';
	@Input() weight = '600';
	@Input() id = '';
	@Input() customClass = 'pr-2 c-pointer';
	@Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
