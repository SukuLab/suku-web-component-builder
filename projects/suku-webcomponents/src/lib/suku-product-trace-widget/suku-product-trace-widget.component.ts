import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suku-product-trace-widget',
  templateUrl: './suku-product-trace-widget.component.html',
  styleUrls: ['./suku-product-trace-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SukuProductTraceWidgetComponent implements OnInit {
  @Input() form: FormGroup;
  val = true;
  val2 = false;
  _visible;
  _data;
  _disableBtn;
  selectedItem;
  isSearch = false;
  _result;
  i;
  @Input('head-name') headName;
  @Input('sub-Head-Name') subHeadName;
  @Input() name;
  @Input() control;
  @Input() searchId = 'searchProduct';
  @Input() productId = 'tracetheProduct';
  @Input() traceMethodRadio = 'method';
  @Input() tracetheProductId = '';
  @Output() searchFun = new EventEmitter();
  @Output() selectproducts = new EventEmitter();
  @Output() searchByProduct = new EventEmitter();
  @Output() traceproduct = new EventEmitter();
  @Input()
  get disableBtn() {
    return this._disableBtn;
  }
  set disableBtn(val) {
    this._disableBtn = val;
  }
  @Input()
  get productdetails() {
    return this._data;
  }
  set productdetails(val) {
    if (val) {
      this._data = JSON.parse(val);
    }
  }

  @Input()
  get result() {
    return this._result;
  }
  set result(res) {
    this._result = res;
  }

  searchEnabled() {
    this.isSearch = !this.isSearch;
  }

  @Input('visible')
  get visible() {
    return this._visible;
  }

  set visible(val) {
    this._visible = val;
  }

  showSelectedPro(newValue) {
    this.selectedItem = newValue;
  }

  constructor() { }

  ngOnInit() {
  }

}

