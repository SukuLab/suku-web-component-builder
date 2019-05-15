import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-bid-tag-type-two',
  templateUrl: './suku-bid-tag-type-two.component.html',
  styleUrls: ['./suku-bid-tag-type-two.component.scss']
})
export class SukuLargeBidTagComponent implements OnInit {
  @Input() priceFontSize = '50px';
  @Input() priceFontColor = '#ffffff';
  @Input() listFontColor = '';
  @Input() listFontSize = '16';
  @Input() totalPriceLabel = 'Total Price';
  @Input() quantityLabel = 'Quantity';
  @Input() minQtyLabel = '';
  @Input() productPrice = 50;
  @Input() productTotalPrice = '50';
  @Input() productQuantity = 1;
  @Input() minimumQuantity;
  @Input() paymentMethod = 'USD';
  @Input() priceFontWeight = 100;
  @Input() listFontWeight;

  constructor() { }

  ngOnInit() {
  }

}
