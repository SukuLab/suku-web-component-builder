import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'suku-nav-submenu',
	templateUrl: './suku-nav-submenu.component.html',
  styleUrls: [ './suku-nav-submenu.component.scss' ]
})
export class SukuNavSubmenuComponent {
	@Input() subMenuList = [];
	selectedItem: any;
	constructor() {
		this.subMenuList = [
			{
				name: 'Listings & Bids',
				path: 'pathOne',
				id: 1
			},
			{
				name: 'Negotiations',
				path: 'pathTwo',
				id: 2
			},
			{
				name: 'Purchase Orders',
				path: 'pathThree',
				id: 3
			},
			{
				name: 'Transactions',
				path: 'pathFour',
				id: 4
			}
		];
	}
	subMenuSelected(event, newValue) {
		console.log(newValue);
		this.selectedItem = newValue;
	}
}
