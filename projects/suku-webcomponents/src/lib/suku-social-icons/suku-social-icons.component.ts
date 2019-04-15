import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-social-icons',
	templateUrl: './suku-social-icons.component.html',
	styleUrls: [ './suku-social-icons.component.scss' ]
})
export class SukuSocialIconsComponent implements OnInit {
	@Input() socialIcons;
	@Output() action = new EventEmitter();
	constructor() {}

	ngOnInit() {
		this.socialIcons = [
			{
				icon: 'fa fa-twitter',
				path: '/companyInfo',
				id: 'twitter'
			},
			{
				icon: 'fa fa-facebook',
				path: '/companyInfo',
				id: 'facebook'
			},
			{
				icon: 'fa fa-linkedin',
				path: '/companyInfo',
				id: 'linkedin'
			},
			{
				icon: 'fa fa-instagram',
				path: '/companyInfo',
				id: 'instagram'
			}
    ];
	}

	sendRoutePath(e) {
		this.action.emit(e);
	} 


}
