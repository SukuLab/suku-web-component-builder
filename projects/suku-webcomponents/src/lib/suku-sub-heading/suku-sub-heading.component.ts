import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-sub-heading',
  templateUrl: './suku-sub-heading.component.html',
  styleUrls: ['./suku-sub-heading.component.scss']
})
export class SukuSubHeadingComponent implements OnInit {
  @Input() name;
	@Input() id = 'heading';
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customClass;

  constructor() { }

  ngOnInit() {
  }

}
