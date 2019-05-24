import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-address-widget',
  templateUrl: './suku-address-widget.component.html',
  styleUrls: ['./suku-address-widget.component.scss']
})
export class SukuAddressWidgetComponent implements OnInit {
  @Input() image = '../../../assets/images/map-pin.svg';
  @Input() name = '9315 NW 112TH AVE';
	@Input() size = '14';
	@Input() color = '#3e3e3e';
	@Input() weight = '500';
	@Input() id = '';
	@Input() iconAlt = 'map-pin';
	@Input() customClass = 'pt-2 pl-3';

  constructor() { }

  ngOnInit() {
  }

}
