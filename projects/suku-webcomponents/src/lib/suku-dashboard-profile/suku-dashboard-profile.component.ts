import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'suku-dashboard-profile',
  templateUrl: './suku-dashboard-profile.component.html',
  styleUrls: ['./suku-dashboard-profile.component.scss']
})
export class SukuDashboardProfileComponent implements OnInit {
  @Input('user-name') userName;
  @Input() image = 'assets/images/user.png';
  @Input() icon = 'assets/images/plus-icon.png';
  @Input('title-one') titleOne;
  @Input('icon-one') iconOne = 'suku-plus-icon suku-md';
  @Input('icon-one-id') iconOneId;
  @Input('icon-one-custom-class') iconOneCustomClass;
  @Input('icon-two') iconTwo = 'suku-plus-icon suku-md';
  @Input('icon-two-id') iconTwoId;
  @Input('icon-two-custom-class') iconTwoCustomClass;
  @Input('title-two') titleTwo;
  @Output('action-one') createNewList = new EventEmitter();
  @Output('action-two') clearBuyInterestStorage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
