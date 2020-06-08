import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'suku-heading',
  templateUrl: './suku-heading.component.html',
  styleUrls: ['./suku-heading.component.scss'],
})
export class SukuHeadingComponent implements OnInit {
  @Input() id = 'heading';
  @Input() size;
  @Input() color;
  @Input() weight;
  @Input('custom-class') customClass;
  constructor() { }

  ngOnInit() {
  }

}
