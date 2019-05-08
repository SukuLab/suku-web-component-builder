import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-title-header',
  templateUrl: './suku-title-header.component.html',
  styleUrls: ['./suku-title-header.component.scss']
})
export class SukuTitleHeaderComponent implements OnInit {
	@Input() id = 'title';
	@Input() size = '20';
	@Input() color;
	@Input() weight = '600';
	@Input() customClass = 'pop';
	constructor() {}

	ngOnInit() {}
}
