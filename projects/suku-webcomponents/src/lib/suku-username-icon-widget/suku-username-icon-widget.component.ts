import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-username-icon-widget',
  templateUrl: './suku-username-icon-widget.component.html',
  styleUrls: ['./suku-username-icon-widget.component.scss']
})
export class SukuUsernameIconWidgetComponent implements OnInit {
  @Input('image-text') alternativeText;
  @Input('image-height') height;
  @Input('image-width') width;
  @Input('image-src') image = '../../assets/icons/group.svg';
  @Input('image-style') customClass = 'img-circle';
  @Input('image-title') welcomeTitle;
  @Input('image-title-font-size') fontSize = '1.6';
  @Input('image-title-id') userNameId = 'username';
  constructor() { }

  ngOnInit() {
  }

}
