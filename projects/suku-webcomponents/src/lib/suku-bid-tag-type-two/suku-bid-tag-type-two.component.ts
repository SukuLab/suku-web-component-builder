import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-bid-tag-type-two',
  templateUrl: './suku-bid-tag-type-two.component.html',
  styleUrls: ['./suku-bid-tag-type-two.component.scss']
})
export class SukuLargeBidTagComponent implements OnInit {
@Input() paymentMethod = 'USD';
@Input() productPrice = 50;
@Input() productTotalPrice = '50';
@Input() productQuantity = 1;
@Input() minimumQuantity;
@Input() paymentTerms = 1;
@Input() deliveryTerms = 1;
@Input() paymentMethodLabel = 'Payment method';
@Input() paymentTermsLabel = 'Payment time frame';
@Input() deliveryTermsLabel = 'Delivery terms';
@Input() totalPriceLabel = 'Total Price';
@Input() quantityLabel = 'Quantity';
@Input() minQtyLabel = '';
@Input() titleText = 'Original Ask'
@Input() documents = [];
@Input() customClass = 'col';
@Input() priceFontSize = '50px';
@Input() priceFontColor = '#ffffff';
@Input() listFontColor = '';
@Input() listFontSize = '16';
@Input() bidTitleFontColor = '';
@Input() bidTitleFontSize = '';
@Input() bidDetilsFontColor = '';
@Input() bidDetilsFontSize = '';
@Input() priceFontWeight = '';
@Input() listFontWeight = '';
@Input() bidTitleFontWeight = '';
@Input() bidDetilsFontWeight = '';
@Input() titleFontColor = '';
@Input() titleFontSize = '';
@Input() titleFontWeight = '';
  constructor() { }

  ngOnInit() {
  }

}
