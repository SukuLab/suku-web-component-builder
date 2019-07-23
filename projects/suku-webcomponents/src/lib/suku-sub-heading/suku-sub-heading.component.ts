import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-sub-heading',
  templateUrl: './suku-sub-heading.component.html',
  styleUrls: ['./suku-sub-heading.component.scss']
})
export class SukuSubHeadingComponent implements OnInit {
	@Input() id = 'heading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input('custom-class') customClass;

  constructor() { }

  ngOnInit() {
  }

}
