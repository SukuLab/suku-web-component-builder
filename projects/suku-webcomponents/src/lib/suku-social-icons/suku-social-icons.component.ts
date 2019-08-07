import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'suku-social-icons',
	templateUrl: './suku-social-icons.component.html',
	styleUrls: ['./suku-social-icons.component.scss']
})
export class SukuSocialIconsComponent implements OnInit {
	@Input() socialIcons =[
			{
				icon: 'fa fa-twitter',
				path: 'https://twitter.com/login',
				id: 'twitter'
			},
			{
				icon: 'fa fa-facebook',
				path: 'https://www.facebook.com/',
				id: 'facebook'
			},
			{
				icon: 'fa fa-linkedin',
				path: 'https://in.linkedin.com/',
				id: 'linkedin'
			},
			{
				icon: 'fa fa-instagram',
				path: 'https://www.instagram.com/',
				id: 'instagram'
			}
		];
	@Output() action = new EventEmitter();
	constructor() { }

	ngOnInit() {

	}

	sendRoutePath(e) {
		this.action.emit(e);
	}


}