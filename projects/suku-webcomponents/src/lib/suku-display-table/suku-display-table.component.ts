import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suku-display-table',
  templateUrl: './suku-display-table.component.html',
  styleUrls: ['./suku-display-table.component.scss']
})
export class SukuDisplayTableComponent implements OnInit {
  @Input('table-header') header;
  @Input('table-header-content') headerContent= 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
  _tableData: any;
  tableDataKey;

  @Input('table-data')
  get tableData() {
    return this._tableData;
  }

  set tableData(val) {
    this._tableData = val;
    if (this._tableData[0]) {
      this.tableDataKey = Object.keys(this._tableData[0]);
    }
  }
  @Input('title-one-id') titleOneId;
	@Input('title-one-size') titleOneSize;
	@Input('title-one-color') titleOneColor = 'white';
	@Input('title-one-weight') titleOneWeight;
  @Input('title-one-custom-class') titleOneCustomClass = '';
  @Input('title-one-Content') titleContent= 'No-Data';
  @Input('header-size') headerSize= '14px';
	@Input('header-color') headerColor;
  @Input('header-weight') headerWeight;
  @Input('data-size') dataSize = '12px';
	@Input('data-color') dataColor;
  @Input('data-weight') dataWeight;  
  @Input('data-href') hrefSelection = 'lotid';
  @Input('status-bg-style') colorPallete = ["#a3ded8", "#f8dbb4", "#c7c3fa", "gray"];
  @Input('status') status = ["completed", "not-completed", "pending",'others'];
  @Output() action = new EventEmitter();
  
  constructor() {
  }
  
  ngOnInit() {
  }

}
