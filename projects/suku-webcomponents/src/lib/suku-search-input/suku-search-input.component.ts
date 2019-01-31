import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'suku-search-input',
  templateUrl: './suku-search-input.component.html',
  styleUrls: ['./suku-search-input.component.scss']
})
export class SukuSearchInputComponent implements OnInit {
  @Input() formRadio: FormGroup;
 @Input() icon = '../../assets/images/search-icon.svg';
 @Input() customClass = 'float-right m-2 mr-3 c-pointer';

  constructor() { }

  ngOnInit() {
  }

}
