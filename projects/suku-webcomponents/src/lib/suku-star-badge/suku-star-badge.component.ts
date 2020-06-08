import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-star-badge',
  templateUrl: './suku-star-badge.component.html',
  styleUrls: ['./suku-star-badge.component.scss']
})
export class SukuStarBadgeComponent implements OnInit {
  @Input() icon = '../assets/images/star.svg';
  @Input() alt = 'star-image';
  @Input('badge-custom-class') badgeCustomClass = '';
  @Input('badge-id') badgeId = 'badgeValue';

  constructor() { }

  ngOnInit() {
  }

}
