import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-nav-bar',
	templateUrl: './suku-nav-bar.component.html',
	styleUrls: ['./suku-nav-bar.component.scss']
})
export class SukuNavBarComponent {
	collpose: any;
	selected: any;
	navbarOpen = false;
	panelOpenState = false;
	isActive = false;
	@Input('user-icon') userIcon = '../../../assets/img/avatar-icon.svg';
	@Input('User-name') UserName = 'Abigail';
	@Input('user-name-color') userNameColor;
	@Input('user-name-font-weight') userNameFontWeight;
	@Input('user-name-font-size') userNameFontSize;
	@Input('navbar-bg-color') navbarBgColor = 'bgcolor';
	@Input() subMenuList = [];
	@Input('navbar-custom-class') navbarCustomClass;
	@Input('submenu-custom-class') submenuCustomClass;
	@Input('logo-custom-class') logoCustomClass = 'img-width';
	@Input('name-custom-class') nameCustomClass = '';
	@Input('hide-bell-icon') hideBellIcon = true;
	@Input('hide-user-detail') hideUserDetail = true;
	@Input('enable-translate') enableTranslate = true;
	@Input('language') language = 'Española';
	@Input('slider-theme') sliderTheme = 'primary';
	@Input('slider-id') sliderId = 'translateButton';
	@Output() action = new EventEmitter();
	@Output() languageChange = new EventEmitter();
	selectedItem: any;
	@Input() data = {
		logo: 'assets/images/Suku_Logo_white.png',
		Username: 'Navbar',
		companyName: 'Microsoft',
		bellIcon: '../../../assets/img/alarm-icon.svg',
		bellIconId: 'notificationIcon',
		notificationCount: 2,
		notificationCountId: 'notificationCount',
		submenu: [
			{
				name: 'Buy',
				subMenu: true,
				visible: false,
				id: 'collapseOne',
				subMenuData: [
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
						name: 'PurchaseOrders',
						path: 'pathThree',
						id: 3
					},
					{
						name: 'Transactions',
						path: 'pathFour',
						id: 4
					}]
			},
			{
				name: 'Sell',
				subMenu: true,
				visible: false,
				id: 'collapseOne',
				subMenuData: [
					{
						name: 'Buy-Sell-Price',
						path: 'pathOne',
						id: 1
					},
					{
						name: 'BuyProducts',
						path: 'pathTwo',
						id: 2
					},
					{
						name: 'BuyPurchaseOrders',
						path: 'pathThree',
						id: 3
					},
					{
						name: 'BuyTransactions',
						path: 'pathFour',
						id: 4
					}]
			},
			{
				name: 'Transaction',
				subMenu: true,
				visible: true,
				subMenuData: [
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
						name: 'PurchaseOrders',
						path: 'pathThree',
						id: 3
					},
					{
						name: 'Transactions',
						path: 'pathFour',
						id: 4
					}]
			},
			{
				name: 'Logout',
				subMenu: false
			}
		]
	};
	selected1: any;
	constructor() {
	}

	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	isActiveFun(names) {
		return this.selected === names;
	}

	toggle(names) {
		console.log('names', names);
		this.selected = '';
		this.isActive = true;
		this.selected = names;
		this.data.submenu.forEach(element => {
			if (names == element) {
				console.log('element', element);
				this.action.emit(element);
				element.visible = true;

			} else {
				element.visible = false;
			}
		});
		this.collpose = names.id;
		console.log('element1', this.collpose);
	}

	select(name) {
		this.selected1 = name;
	}

	isActive2(name) {
		return this.selected1 === name;
	}

}
