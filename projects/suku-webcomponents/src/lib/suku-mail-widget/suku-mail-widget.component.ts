import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-mail-widget',
  templateUrl: './suku-mail-widget.component.html',
  styleUrls: ['./suku-mail-widget.component.scss']
})
export class SukuMailWidgetComponent implements OnInit {
  @Input() name = 'dconway@vairog.com';
	@Input() size = '14';
	@Input() color = '#0f0f0f';
	@Input() weight = '500';
	@Input() customClass = 'pt-2 pl-3';
	@Input() id = 'suku-mail-widget';
	@Input() image = '/assets/images/mail-light.svg';
  constructor() { }

  ngOnInit() {
  }

}
