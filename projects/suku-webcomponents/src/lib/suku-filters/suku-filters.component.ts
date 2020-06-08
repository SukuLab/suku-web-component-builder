import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'suku-filters',
  templateUrl: './suku-filters.component.html',
  styleUrls: ['./suku-filters.component.scss']
})
export class SukuFiltersComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() filterHeading;
  @Input() size = '18';
  @Input() color = 'primary';
  @Input() diameter = '18';
  @Input() filterSubHeading;
  @Input('enable-loader') enableLoader = false;
  @Input() statusTypesDynamic: any[];
  @Output() filterOnChange = new EventEmitter();
  @Output() applyFilter = new EventEmitter();
  @Output() selectAll = new EventEmitter();
  @Output() deselectAll = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
