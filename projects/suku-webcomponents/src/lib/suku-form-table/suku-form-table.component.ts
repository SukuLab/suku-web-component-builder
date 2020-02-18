
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

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
  disableArrList = [744518];
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
  @Input('tableDisabled') tableDisabled = [];
  @Input('disableHighlightKey') disableHighlightKey = false;
  keyLength: number;
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
  @Input() actionkey = 'actions_TblColHdr';
  @Input() disabledArrayKey = [];
  @Input()
  get items() {
    console.log('items ------------', this.items);
    const data = this.items;
    if (data) {
      data.filter((val, index) => {
        delete val['undefined'];
        return val;
      });
    }
    return data;
  }
  set items(val) {
    if (val) {
      console.log('_items', val);
      if (val) {
        val.filter((el, index) => {
          delete el['undefined'];
          return el;
        });
      }
      this._items = val;
    }
    if (this._items[0]) {
      this._itemsKey = Object.keys(this._items[0]);
      this.keyLength = Object.keys(this._itemsKey).length;
    }
  }
  @Input() uniqueKey = 'sku';

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
  @Input() disableSelectAll = false;
  @Input() patchEmpty = 'Processor';
  @Input() hideErrorMsg = false;
  @Input('error-message-one') errorMessageOne = 'value should be  greater then 0';
  @Output() save = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() submitData = new EventEmitter();
  @Output() formStatus = new EventEmitter();
  @Output() limit = new EventEmitter();
  @Input('table-sortable') sortable = 'false';
  @Input() maxRowLength = 1;
  _null = null;
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    console.log('e', e);
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
  constructor() {
  }

  ngOnInit() {
  }

  addTable(val, editIndex) {
    if (this._items.length === this.maxRowLength) {
      this.limit.emit(true);
      return;
    }

    if (val === 10) {
      if (this._items.length + val > this.maxRowLength) {
        this.limit.emit(true);
        return;
      }
    }

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
        template[this.actionkey] = '';
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
    console.log('index', i, this._items.length);
    if (this._items) {
      if (this._items.length != 1) {
        this._items.splice(i, 1);
        const data = {
          index: i,
          data: item
        };
        this.remove.emit(data);
      } else {
        const data = {
          index: i,
          data: item
        };
        this.remove.emit(data);
      }
    }
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
            console.log('element', element[key], index, mainIndex, this._items[mainIndex][this.patchKey]);
            if (!this.tableDisabled[mainIndex]) {
              element[key] = true;
              if (!element[this.patchKey]) {
                element[this.patchKey] = element[this.highlighterKey];
              }
              if (!this._items[mainIndex][this.patchKey]) {
                this._items[mainIndex][this.patchKey] = this._items[mainIndex][this.highlighterKey];
              }
            }
          }
        });
        console.log('data', element);
      });
    } else {
      this._items.forEach((element, index) => {
        Object.keys(element).forEach((key) => {
          if (key == this.selectionKey) {
            console.log('element', element[key]);
            if (!this.tableDisabled[index]) {
              element[key] = false;
            }
          }
          if (key == this.patchKey) {
            console.log('element', element[key]);
            if (!this.tableDisabled[index]) {
              element[this.patchKey] = '';
            }
          }
          if (this.type == 'Processor') {
            if (key == this.highlighterKey) {
              console.log('element', element[key]);
              if (!this.tableDisabled[index]) {
                element[this.highlighterKey] = '';
              }
            }
          }
        });
        console.log('data', element, this.patchKey);
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

  async patchValue(selection, defaultValue, index, key?) {
    console.log('patchValue', selection, defaultValue, index, key);
    if (selection) {
      this._items[index][this.patchKey] = defaultValue;
    } else {
      if (!this.tableDisabled[index] && !this._items[index][this.patchKey]) {
        this.selectAll = false;
      }
      this._items[index][this.patchKey] = this._null;
      if (this.type == this.patchEmpty) {
        this._items[index][key] = this._null;
      }
    }
  }

  sendData() {
    const data = this._items;

    console.log('this.disableArrList', this.disableArrList);
    this.submitData.emit(data);
  }

  validate(key, index) {
    console.log('this is key :', key);
    console.log('this is index :', index);
    if (key == 0) {
      this.errorvalidationIndex = index;
      this.errorvalidationKey = key;
    } else {
      this.errorvalidationIndex = 'N/A';
      this.errorvalidationKey = 'N/A';
    }
  }

  checkSpcialChar(event, type) {
    console.log(event, event.target.value);

    /* disable - e */
    if (type == 'Number') {
      if (event.charCode == 101) {
        event.returnValue = false;
        return false;
      }
      if (event.charCode == 45) {
        event.returnValue = false;
        return false;
      }
      if (event.charCode == 69) {
        event.returnValue = false;
        return false;
      }
    }

    /* validation for string  */
    if (type == 'String') {
      if (event.charCode == 36 ||
        event.charCode == 95 ||
        event.charCode == 42 ||
        event.charCode == 45 ||
        event.charCode == 43 ||
        event.charCode == 46 ||
        event.charCode == 40 ||
        event.charCode == 41 ||
        event.charCode == 39 ||
        event.charCode == 33 ||
        event.charCode == 32
      ) {
        event.returnValue = true;
        return true;
      }
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

  sort(head, type, sortOption) {
    console.log('D', head, type, sortOption);
    if (this._items) {
      if (!(type == 'Checkbox')) {
        this._items.sort((a, b) => {
          return +a[head] - +b[head];
        });
      }
      if (type == 'Number') {
        if (sortOption == 'asse') {
          this._items.sort((a, b) => {
            return a[head] - b[head]
          });
        }
        if (sortOption == 'desc') {
          this._items.sort((a, b) => {
            return b[head] - a[head]
          });
        }
      }
      if (type == 'String') {
        this._items.sort((a, b) => {
          if (a[head].toLowerCase() < b[head].toLowerCase() && sortOption == 'asse') {
            return -1;
          }
          if (b[head].toLowerCase() < a[head].toLowerCase() && sortOption == 'desc') {
            return -1;
          }

          if (a[head].toLowerCase() > b[head].toLowerCase() && sortOption == 'asse') {
            return 1;
          }
          if (b[head].toLowerCase() > a[head].toLowerCase() && sortOption == 'desc') {
            return 1;
          }

          return 0;
        });
      }
      if (type == 'Date') {
        const sortable = this._items.some((dataVal) => {
          return dataVal[head] !== '-';
        });
        console.log({ sortable });

        if (sortable) {
          this._items.sort((a, b) => {
            if (sortOption == 'asse') {
              if (b[head] == '-') {
                return -1;
              }
              return (<any>new Date(b[head]) - <any>new Date(a[head]));
            }
            if (sortOption == 'desc') {
              if (a[head] == '-') {
                return -1;
              }
              return (<any>new Date(a[head]) - <any>new Date(b[head]));
            }
          });
        }

      }
      this._items.forEach(val => {
        delete val['undefined'];
      });
      const data = this._items;
      if (data) {
        data.filter((val, index) => {
          console.log('val', val);
          if (this.disabledArrayKey) {
            const result = this.disabledArrayKey.some(el => {
              console.log('el', el, val[this.uniqueKey]);
              return el == val[this.uniqueKey];
            });
            console.log('result', result);
            if (result) {
              this.tableDisabled[index] = true;
            } else {
              this.tableDisabled[index] = false;
            }
          }
          console.log(' this.tableDisabled', this.tableDisabled)
          delete val['undefined'];
          return val;
        });
      }
      console.log('sort -', this._items, head, type, sortOption);
    }
  }


}
