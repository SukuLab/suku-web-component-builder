import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-form-table',
  templateUrl: './suku-form-table.component.html',
  styleUrls: ['./suku-form-table.component.scss']
})
export class SukuFormTableComponent implements OnInit {
  @Input('table-header') header;
  @Input('table-header-content') headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
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
  @Input('title-content') titleContent = 'Enter animal information:';
  @Input('header-size') headerSize = '14px';
  @Input('header-color') headerColor;
  @Input('header-weight') headerWeight;
  @Input('data-size') dataSize = '12px';
  @Input('data-color') dataColor;
  @Input('data-weight') dataWeight;
  @Input('data-href') hrefSelection = 'lotid';
  @Input('status-bg-style') colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
  @Input('status') status = ['completed', 'not-completed', 'pending', 'others'];

  @Input() dataHeader = {
    CowId: 'Number',
    Birthdate: 'String',
    Approx_Weight: 'Number',
    Breed: 'Array'
  };

  editable = [];
  @Input() typeKey;
  @Input() items;
  @Input() selectionKey;
  @Input() highlighterKey;

  constructor() {
  }

  ngOnInit() {
    console.log('dataHeader', this.dataHeader);
  }

  addTable(val, editIndex) {
    for (let i = 0; i < val; i++) {
      this.editable[editIndex + i] = true;
      const template = { name: '', 'Physical Challenged': false, dob: '', degree: '', pet: '', action: '' };
      this.items.push(template);
    }
  }

  submit() {
    console.log('items', this.items);
  }

  edit(i) {
    console.log(i);
    if (this.editable[i]) {
      this.editable[i] = false;
    } else {
      this.editable[i] = true;
    }
  }

  remove(i) {
    console.log('item', i);
    this.items.splice(i, 1);
    console.log('data', this.items);
  }

}
