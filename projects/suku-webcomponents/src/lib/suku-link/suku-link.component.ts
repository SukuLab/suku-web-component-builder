import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-link',
  templateUrl: './suku-link.component.html',
  styleUrls: ['./suku-link.component.scss']
})
export class SukuLinkComponent implements OnInit {
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input('custom-class') customClass = '';
	@Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
