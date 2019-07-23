import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-title-header',
  templateUrl: './suku-title-header.component.html',
  styleUrls: ['./suku-title-header.component.scss']
})
export class SukuTitleHeaderComponent implements OnInit {
	@Input('title-one-id') titleOneId;
	@Input('title-one-size') titleOneSize;
	@Input('title-one-color') titleOneColor = 'white';
	@Input('title-one-weight') titleOneWeight;
	@Input('title-one-custom-class') titleOneCustomClass = '';
  constructor() { }

  ngOnInit() {
  }

}
