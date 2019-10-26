import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-auth-table',
  templateUrl: './suku-auth-table.component.html',
  styleUrls: ['./suku-auth-table.component.scss']
})
export class SukuAuthTableComponent implements OnInit {

  @Input('tableHeading') tableHeading = 'Table Heading';
  @Input('tableContent') tableContent = [{ 'blocknumber': '11' }, { 'blocknumber2': '11' }, { 'claim': ['hello', 'wor'] }]
  @Input('headingFontWeight') headingFontWeight;
  @Input('headingTextColor') headingTextColor;
  @Input('headingTextSize') headingTextSize;
  @Input('headingBgColor') headingBgColor;
  @Input('keyFontWeight') keyFontWeight;
  @Input('keyTextColor') keyTextColor;
  @Input('keyTextSize') keyTextSize;
  @Input('keyBgColor') keyBgColor;
  @Input('valueFontWeight') valueFontWeight;
  @Input('valueTextColor') valueTextColor;
  @Input('valueTextSize') valueTextSize;
  @Input('valueBgColor') valueBgColor;
  @Input('tableBgColor') tableBgColor = 'white';
  constructor() { }

  ngOnInit() {
  }

  getKeyValue(obj) {
    let formatedObject = {};
    Object.keys(obj).forEach(key => {
      formatedObject = {
        key: key,
        value: obj[key]
      }
    });
    return formatedObject
  }

  chechIfArray(data) {
    console.log(data);
    if (typeof (data) == 'object') {
      return true;
    } else {
      return false;
    }
  }
}
