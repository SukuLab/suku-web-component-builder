import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-add-icon',
  templateUrl: './suku-add-icon.component.html',
  styleUrls: ['./suku-add-icon.component.scss']
})
export class SukuAddIconComponent implements OnInit {
  @Input() size;
  @Input() color;
  @Input() weight;
  @Input() id = 'addNewSellListing';
  @Input() icon = 'suku-plus-icon suku-md';
  @Input() customClass = 'add-widget c-pointer';
  @Input() iconId = 'icon';
  @Input() iconColor;
  @Input() iconCustomClass = '';

  constructor() { }

  ngOnInit() {
  }

}
