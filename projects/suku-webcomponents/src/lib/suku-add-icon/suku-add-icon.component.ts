import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-add-icon',
  templateUrl: './suku-add-icon.component.html',
  styleUrls: ['./suku-add-icon.component.scss']
})
export class SukuAddIconComponent implements OnInit {
  @Input() name;
	@Input() size;
	@Input() color;
  @Input() weight;
  @Input() iconColor;
	@Input() customClass = 'clearAll c-pointer';

  constructor() { }

  ngOnInit() {
  }

}
