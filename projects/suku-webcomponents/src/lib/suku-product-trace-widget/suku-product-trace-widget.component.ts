import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormGroup
} from '@angular/forms';

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
  @Input('label-one') labelOne;
  @Input('label-one-id') labelOneId = 'traceMethod1';
  @Input('label-one-custom-class') labelOneCustomClass;
  @Input('label-two') labelTwo;
  @Input('label-two-id') labelTwoId = 'productId';
  @Input('label-two-custom-class') labelTwoCustomClass;
  @Input('label-three') labelThree;
  @Input('label-three-id') labelThreeId;
  @Input('label-three-custom-class') labelThreeCustomClass;
  @Input('trace-box-custom-class') traceBoxCustomClass;
  @Input('search-input-id') searchInputId = 'search';
  @Input('search-icon-custom-class') searchIconCustomClass = 'searchIcon';

  /* suku-btn */
  @Input('btn-one-id') btnOneId = 'searchForProduct';
  @Input('btn-one-size') btnOneSize = '';
  @Input('btn-one-weight') btnOneWeight = '600';
  @Input('btn-label-one') btnLabelOne = 'Search for product';
  @Input('btn-type') btnType = 'info';
  @Input('btn-one-custom-class') btnOneCustomClass = '';
  @Input('btn-one-disable') btnOneDisable: Boolean;
  @Output() btnOneAction = new EventEmitter();
  /*  */
  @Input('btn-two-id') btnTwoId = 'traceTheProduct';
  @Input('btn-two-size') btnTwoSize = '';
  @Input('btn-two-weight') btnTwoWeight = '600';
  @Input('btn-label-two') btnLabelTwo = 'trace the product';
  @Input('btn-two-custom-class') btnTwoCustomClass = '';
  @Input('btn-two-disable') btnTwoDisable: Boolean;
  @Output() btnTwoAction = new EventEmitter();

  /* suku-btn */
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
  @Input() productdetails = [];
  // get productdetails() {
  //   return this._data;
  // }
  // set productdetails(val) {
  //   if (val) {
  //     this._data = (val);
  //   }
  // }

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

  constructor() {}

  ngOnInit() {}

}