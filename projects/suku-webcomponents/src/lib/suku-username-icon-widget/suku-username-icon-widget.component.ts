import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suku-username-icon-widget',
  templateUrl: './suku-username-icon-widget.component.html',
  styleUrls: ['./suku-username-icon-widget.component.css']
})
export class SukuUsernameIconWidgetComponent implements OnInit {
  @Input('image-text') alternativeText;
  @Input('image-height') height;
  @Input('image-width') width;
  @Input('image-src') image;
  @Input('image-style') customClass = 'img-circle';
  @Input('image-title') welcomeTitle;

  constructor() { }

  ngOnInit() {
  }

}
