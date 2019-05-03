import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-image-widget',
  templateUrl: './suku-image-widget.component.html',
  styleUrls: ['./suku-image-widget.component.scss']
})
export class SukuImageWidgetComponent implements OnInit {
  @Input() imageSrc = '';
  constructor() { }

  ngOnInit() {
  }

}
