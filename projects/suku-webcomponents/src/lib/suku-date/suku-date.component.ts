import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'suku-date',
  templateUrl: './suku-date.component.html',
  styleUrls: ['./suku-date.component.scss']
})
export class SukuDateComponent implements OnInit {
@Input() dateString;
@Input() fontSize;
@Input() fontWeight;
@Input() dateId = 'dateId';
@Input() fontFamily;
@Input() fontFamilyClass;
@Input() fontColor;
  constructor() { }

  ngOnInit() {
  	if (this.fontFamily == 'secondary') {
  		this.fontFamilyClass = 'sukuSecondaryFont';
  	} else {
  		this.fontFamilyClass = 'sukuPrimaryFont';
  	}
  }

}
