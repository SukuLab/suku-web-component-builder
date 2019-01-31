import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'suku-heading',
  templateUrl: './suku-heading.component.html',
  styleUrls: ['./suku-heading.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SukuHeadingComponent implements OnInit {
  @Input() name;
  @Input() id = 'heading';
  @Input() size;
  @Input() color;
  @Input() weight;
  @Input() customClass;
  constructor() { }

  ngOnInit() {
  }

}
