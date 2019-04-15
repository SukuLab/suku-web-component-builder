import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-track-progress-bar',
  templateUrl: './suku-track-progress-bar.component.html',
  styleUrls: ['./suku-track-progress-bar.component.scss']
})
export class SukuTrackProgressBarComponent implements OnInit {
  @Input('progress-style-one') progressStyleOne = 'progressCompleted';
  @Input('progress-style-two') progressStyleTwo = 'progressActive';
  @Input('progress-style-three') progressStyleThree = 'progressUpcoming';
  @Input() headingOne = 'SELECT A PRODUCT';
  @Input() headingTwo = 'TRACE COMPONENTS';
  @Input() headingThree = 'SHOW TACE TRACE';
  @Input() headingOneId = 'firstHeading';
  @Input() headingTwoId = 'secondHeading';
  @Input() headingThreeId = 'thirdHeading';
  @Input('custom-heading-one-class') customHeadingOneClass = '';
  @Input('custom-heading-two-class') customHeadingTwoClass = '';
  @Input('custom-heading-three-class') customHeadingThreeClass = '';

  constructor() { }

  ngOnInit() {
  }

}
