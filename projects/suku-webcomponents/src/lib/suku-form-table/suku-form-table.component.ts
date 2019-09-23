
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-form-table',
  templateUrl: './suku-form-table.component.html',
  styleUrls: ['./suku-form-table.component.scss']
})
export class SukuFormTableComponent implements OnInit {
  j;
  _items = [];
  _itemsKey;
  editable = [];
  errorvalidationIndex;
  errorvalidationKey;
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
  @Input()
  set enableEditIndex(val) {
    if (val) {
      for (let i = 0; i < +val; i++) {
        this.editable[i] = true;
      }
    }
  }
  @Input() typeKey;
  @Input() type;
  @Input() defaultCount = 2;
  @Input()
  get items() {
    console.log('items ------------');
    return this._items;
  }
  set items(val) {
    if (val) {
      console.log('_items', val);
      this._items = val;
    }
    if (this._items[0]) {
      this._itemsKey = Object.keys(this._items[0]);
    }
  }
  @Input() selectionKey;
  @Input() highlighterKey;
  @Input() patchKey;
  @Input() hiddenKey = [];
  @Input() enableHighlighter = false;
  @Input() enableControls = true;
  @Input() enableSelectAll = false;
  @Input() selectAll;
  @Input() keyData = [];
  @Input() controlsSize;
  @Input() controlCustomClass;
  @Output() save = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() submitData = new EventEmitter();
  @Output() formStatus = new EventEmitter();

  _null = null;

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

  edit(i, item) {
    console.log(i);
    if (this.editable[i]) {
      this.editable[i] = false;
      this.save.emit(item);
    } else {
      this.editable[i] = true;
    }
  }

  removedata(i, item) {
    this._items.splice(i, 1);
    this.remove.emit(item);
  }

  checkValid(list) {
    if (this.keyData.length > 0) {
      const result = this.keyData.some(val => {
        return val.key == list;
      });
      return result;
    } else {
      return false;
    }
  }

  selectAllAction() {
    const selectAll = this.selectAll;
    if (selectAll) {
      this._items.forEach((element, mainIndex) => {
        Object.keys(element).forEach((key, index) => {
          if (key == this.selectionKey) {
            console.log('element', element[key], index, mainIndex, this._items);
            element[key] = true;
            element[this.patchKey] = element[this.highlighterKey];
            this._items[mainIndex][this.patchKey] = this._items[mainIndex][this.highlighterKey];
          }
        });
        console.log('data', element);
      });
    } else {
      this._items.forEach(element => {
        Object.keys(element).forEach((key) => {
          if (key == this.selectionKey) {
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

  chkHiddenKey(key) {
    if (this.hiddenKey.length > 0) {
      const result = this.hiddenKey.some(val => {
        return val == key;
      });
      return result;
    } else {
      return false;
    }
  }

  async patchValue(selection, defaultValue, index) {
    if (selection) {
      this._items[index][this.patchKey] = defaultValue;
    } else {
      this.selectAll = false;
      this._items[index][this.patchKey] = this._null;
    }
  }

  sendData() {
    const data = this._items;
    this.submitData.emit(data);
  }

  validate(key, index) {
    console.log("this is key :", key);
    console.log("this is index :", index);
    if (key == 0) {
      this.errorvalidationIndex = index;
      this.errorvalidationKey = key;
    } else {
      this.errorvalidationIndex = 'N/A';
      this.errorvalidationKey = 'N/A';
    }
  }

  checkSpcialChar(event) {
    console.log(event, event.target.value);
    if (event.charCode == 36 ||
      event.charCode == 95 ||
      event.charCode == 42 ||
      event.charCode == 45 ||
      event.charCode == 43 ||
      event.charCode == 40 ||
      event.charCode == 41 ||
      event.charCode == 39 ||
      event.charCode == 33
    ) {
      event.returnValue = true;
      return true;
    }

    if (!((event.charCode >= 65) && (event.charCode <= 90) ||
      (event.charCode >= 97) && (event.charCode <= 122) || (event.charCode >= 48) &&
      (event.charCode <= 57))) {
      event.returnValue = false;
      return false;
    }
    event.returnValue = true;
    return true;
  }

}
