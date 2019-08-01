import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'suku-profile-image-icon',
  templateUrl: './suku-profile-image-icon.component.html',
  styleUrls: ['./suku-profile-image-icon.component.scss']
})
export class SukuProfileImageIconComponent implements OnInit {

  @Input() alternativeText = 'profileImage';
  @Input() height = '50';
  @Input() width = '50';
  @Input() image = '../../assets/images/browser.png';
  @Input() customClass = 'img-circle';

  constructor() { }

  ngOnInit() {
  }

}
