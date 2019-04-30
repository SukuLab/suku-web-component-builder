import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-title-header',
  templateUrl: './suku-title-header.component.html',
  styleUrls: ['./suku-title-header.component.scss']
})
export class SukuTitleHeaderComponent implements OnInit {
	@Input() titleOne = 'LISTING NAME';
	@Input() titleOneId;
	@Input() titleOneSize;
	@Input() titleOneColor;
	@Input() titleOneWeight;
	@Input() titleOneCustomClass = 'pop';
  constructor() { }

  ngOnInit() {
  }

}
