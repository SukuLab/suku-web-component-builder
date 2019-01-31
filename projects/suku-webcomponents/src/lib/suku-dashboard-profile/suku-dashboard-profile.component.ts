import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
	@Input('title-two') titleTwo;
	@Output('action-one') createNewList = new EventEmitter();
	@Output('action-two') clearBuyInterestStorage = new EventEmitter();
	test(i) {
		alert(i);
	}

  constructor() { }

  ngOnInit() {
  }

}
