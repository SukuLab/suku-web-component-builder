import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-progress-bar',
  templateUrl: './suku-progress-bar.component.html',
  styleUrls: ['./suku-progress-bar.component.scss']
})
export class SukuProgressBarComponent implements OnInit {
	@Input('progress-style-one') progressStyleOne = '';
	@Input('progress-style-two') progressStyleTwo = '';
	@Input('progress-style-three') progressStyleThree = '';
	@Input('progress-style-four') progressStyleFour = '';
	@Input('progress-style-five') progressStyleFive = '';
	@Input() headingOne = 'LISTING DETAILS';
	@Input() headingTwo = 'PRODUCT DETAILS';
	@Input() headingThree = 'PRODUCT TRACEABILITY';
	@Input() headingFour = 'TERMS OF SALE';
	@Input() headingFive = 'CONFIRM';
	@Input() headingOneId = 'firstHeading';
	@Input() headingTwoId = 'secondHeading';
	@Input() headingThreeId = 'thirdHeading';
	@Input() headingFourId = 'fourthHeading';
	@Input() headingFiveId = 'fifthHeading';
	@Input('custom-heading-one-class') customHeadingOneClass = '';
	@Input('custom-heading-two-class') customHeadingTwoClass = '';
	@Input('custom-heading-three-class') customHeadingThreeClass = '';
	@Input('custom-heading-four-class') customHeadingFourClass = '';
	@Input('custom-heading-five-class') customHeadingFiveClass = '';
	@Input() max;
  constructor() { }

  ngOnInit() {
  }

}
