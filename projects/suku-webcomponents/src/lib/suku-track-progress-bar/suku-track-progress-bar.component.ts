import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-track-progress-bar',
  templateUrl: './suku-track-progress-bar.component.html',
  styleUrls: ['./suku-track-progress-bar.component.scss']
})
export class SukuTrackProgressBarComponent implements OnInit {
  @Input('progress-style-one') progressStyleOne = 'progressCompleted';
  @Input('progress-style-two') progressStyleTwo = 'progressActive';
  @Input('progress-style-three') progressStyleThree = 'progressUpcoming';
  @Input('heading-one') headingOne = 'SELECT A PRODUCT';
  @Input('heading-two') headingTwo = 'TRACE COMPONENTS';
  @Input('heading-three') headingThree = 'SHOW TRACE TREE';
  @Input('heading-one-id') headingOneId = 'firstHeading';
  @Input('heading-two-id') headingTwoId = 'secondHeading';
  @Input('heading-three-id') headingThreeId = 'thirdHeading';
  @Input('custom-heading-one-class') customHeadingOneClass = '';
  @Input('custom-heading-two-class') customHeadingTwoClass = '';
  @Input('custom-heading-three-class') customHeadingThreeClass = '';
  @Input('progress-bar-label-one') progressBarLabelOne = '1';
  @Input('progress-bar-label-two') progressBarLabelTwo = '2';
  @Input('progress-bar-label-three') progressBarLabelThree = '3';
  @Input('tick-sign-custom-class') tickSignCustomClass = 'tickSign';
  @Input('custom-heading-custom-class') customHeadingCustomClass = 'col-sm-8 offset-sm-2';
  @Input('progress-custom-class') progressCustomClass = 'col-sm-6 offset-sm-3';
  @Input('custom-progress-title') customProgressTitle = 'progressTitle';
  @Input('content-custom-class') contentCustomClass = 'text-center';
  @Input('enable-pointer') enablePointer = false;
  @Output() progressOneAction = new EventEmitter();
  @Output() progressTwoAction = new EventEmitter();
  @Output() progressThreeAction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
