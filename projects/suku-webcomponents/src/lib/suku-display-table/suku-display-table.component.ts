import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suku-display-table',
  templateUrl: './suku-display-table.component.html',
  styleUrls: ['./suku-display-table.component.scss']
})
export class SukuDisplayTableComponent implements OnInit {
  @Input('table-header') header;
  @Input('table-header-content') headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
  _tableData: any;
  p = 0;
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
  @Input('title-content') titleContent = 'No-Data';
  @Input('header-size') headerSize = '14px';
  @Input('header-color') headerColor;
  @Input('header-weight') headerWeight;
  @Input('data-size') dataSize = '12px';
  @Input('data-color') dataColor;
  @Input('data-weight') dataWeight;
  @Input('data-href') hrefSelection = 'lotid';
  @Input('status-bg-style') colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
  @Input('status') status = ['completed', 'not-completed', 'pending', 'others'];
  @Input('display-pagination') showPagination = false;
  @Input('table-items-count') itemsPerPageCount;
  @Input('total-item') totalItem;
  @Input('translator') translator = true;
  @Input('pagination-previous-label') paginationPreviousLabel = 'Previous';
  @Input('pagination-next-label') paginationNextLabel = 'Next';
  @Output() action = new EventEmitter();
  @Output() pagination = new EventEmitter();
  @Input('table-sortable') sortable = 'false';
  @Input('date-type') dateType = ['startdate', 'enddate'];
  @Input('enable-date-pipe') enableDatePipe = false;
  constructor() {
  }

  ngOnInit() {
  }

  paginationFun(p) {
    this.pagination.emit(p);
  }
  sort(head, type, formate) {
    if (this._tableData) {
      if (type == 'Number') {
          if (formate == 'asse') {
            this._tableData.sort(function(a, b){
              return a[head]-b[head]});
          }
          if (formate == 'desc') {
            this._tableData.sort(function(a, b){
              return b[head]-a[head]
            });
          }
      }
      if (type == 'String') {
        this._tableData.sort(function (a, b) {
          if (a[head] < b[head] && formate == 'asse') {
            return -1;
          }
          if (b[head] < a[head] && formate == 'desc') {
            return -1;
          }
          return 0;
        });
      }
      if (type == 'Date') {
        this._tableData.sort(function (a, b) {
          a = new Date(a[head]);
          b = new Date(b[head]);
          if (a < b && formate == 'asse') {
            return -1;
          }
          if (b < a && formate == 'desc') {
            return -1;
          }
          return 0;
        });
      }
      console.log('sort -', this._tableData, head, type, formate);
    }
  }

  // dateType(key) {
  //   console.log('key', key);
  //   return true;
  // }

}
