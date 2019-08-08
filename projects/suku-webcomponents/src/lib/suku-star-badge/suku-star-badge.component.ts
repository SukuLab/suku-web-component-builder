import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-star-badge',
  templateUrl: './suku-star-badge.component.html',
  styleUrls: ['./suku-star-badge.component.scss']
})
export class SukuStarBadgeComponent implements OnInit {
  @Input('icon') icon = 'suku-star-badge suku-md';
  @Input('icon-id') iconId = 'badgeIcon';
  @Input('icon-custom-class') iconCustomClass = '';
  @Input('badge-custom-class') badgeCustomClass = '';
  @Input('badge-id') badgeId = 'badgeValue';

  constructor() { }

  ngOnInit() {
  }

}
