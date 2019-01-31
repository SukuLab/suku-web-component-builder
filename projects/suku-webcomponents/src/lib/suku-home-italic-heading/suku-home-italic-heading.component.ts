import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-home-italic-heading',
  templateUrl: './suku-home-italic-heading.component.html',
  styleUrls: ['./suku-home-italic-heading.component.scss']
})
export class SukuHomeItalicHeadingComponent implements OnInit {
  @Input() name;
	@Input() size;
	@Input() color;
	@Input() weight;
	@Input() customClass;

  constructor() { }

  ngOnInit() {
  }

}
