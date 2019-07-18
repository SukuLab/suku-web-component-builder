import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suku-search-input',
  templateUrl: './suku-search-input.component.html',
  styleUrls: ['./suku-search-input.component.scss']
})
export class SukuSearchInputComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control;
  @Input() icon = '../../assets/images/search-icon.svg';
  @Input('custom-class') customClass = 'c-pointer default';
  @Input('icon-custom-class') iconCustomClass = 'float-right c-pointer searchIcon';
  @Input('icon-id') iconId = 'searchIcon';
  @Input('placeholder') placeholder = 'search partners';
  @Output() searchOnType = new EventEmitter();
  @Output() searchOnEnter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
