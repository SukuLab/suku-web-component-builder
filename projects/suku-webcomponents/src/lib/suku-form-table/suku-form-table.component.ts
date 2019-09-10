
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-form-table',
  templateUrl: './suku-form-table.component.html',
  styleUrls: ['./suku-form-table.component.scss']
})
export class SukuFormTableComponent implements OnInit {
  j;
  _items = [];
  editable = [];
  @Input('title-one-id') titleOneId;
  @Input('title-one-size') titleOneSize;
  @Input('title-one-color') titleOneColor = 'white';
  @Input('title-one-weight') titleOneWeight;
  @Input('title-one-custom-class') titleOneCustomClass = '';
  @Input('title-content') titleContent = 'Enter animal information:';
  @Input('header-size') headerSize = '14px';
  @Input('header-color') headerColor;
  @Input('header-weight') headerWeight;
  @Input('status-bg-style') colorPallete = ['#a3ded8', '#f8dbb4', '#c7c3fa', 'gray'];
  @Input('status') status = ['completed', 'not-completed', 'pending', 'others'];
  @Input() typeKey;
  @Input() defaultCount = 2;
  @Input()
  get items() {
    return this._items;
  }
  set items(val) {
    console.log('val', val.length);
    if (val.length == 0) {
      this.addTable(this.defaultCount, val.length);
    } else {
      this._items = val;
    }
  }
  @Input() selectionKey;
  @Input() highlighterKey;
  @Input() patchKey;
  @Input() enableHighlighter = false;
  @Input() enableControls = true;
  @Input() enableSelectAll = false;
  @Input() selectAll;
  @Input() keyData;
  @Input() controlsSize;
  @Input() controlCustomClass;

  constructor() {
  }

  ngOnInit() {
  }

  addTable(val, editIndex) {
    for (let i = 0; i < val; i++) {
      this.editable[editIndex + i] = true;
      const template = {};
      const typeKey = this.typeKey;
      Object.keys(typeKey).forEach((key) => {
        if (typeKey[key] == 'Checkbox') {
          template[key] = false;
        } else if (typeKey[key] == 'String' || typeKey[key] == 'Number') {
          template[key] = '';
        } else {
          template[key] = '';
        }
      });
      if (this.enableControls) {
        template['action'] = '';
      }
      this._items.push(template);
    }
    console.log('_items', this._items);
  }

  submit() {
    console.log('_items', this._items);
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
    this._items.splice(i, 1);
  }

  checkValid(list) {
    const data = [
      { key: '# of Boxes' },
      { key: 'test' }
    ];
    const result = data.some(val => {
      return val.key == list;
    });
    return result;
  }

  selectAllAction() {
    const selectAll = this.selectAll;
    if (selectAll) {
      this._items.forEach(element => {
        Object.keys(element).forEach((key) => {
          if (key == 'Received All Boxes') {
            console.log('element', element[key]);
            element[key] = true;
          }
        });
        console.log('data', element);
      });
    } else {
      this._items.forEach(element => {
        Object.keys(element).forEach((key) => {
          if (key == 'Received All Boxes') {
            console.log('element', element[key]);
            element[key] = false;
          }
          if (key == this.patchKey) {
            console.log('element', element[key]);
            element[key] = '';
          }
        });
        console.log('data', element);
      });
    }

  }


}



