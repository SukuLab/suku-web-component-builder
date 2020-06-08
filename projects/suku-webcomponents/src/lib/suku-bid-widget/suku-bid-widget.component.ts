import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-bid-widget',
  templateUrl: './suku-bid-widget.component.html',
  styleUrls: ['./suku-bid-widget.component.scss']
})
export class SukuBidWidgetTagComponent implements OnInit {
  @Input('payment-method') paymentMethod = 'USD';
  @Input('product-price') productPrice = 50;
  @Input('product-total-price') productTotalPrice = '50';
  @Input('product-quantity') productQuantity = 1;
  @Input('minimum-quantity') minimumQuantity;
  @Input('payment-terms') paymentTerms = 1;
  @Input('delivery-terms') deliveryTerms = 1;
  @Input('payment-method-label') paymentMethodLabel = 'Payment method';
  @Input('payment-terms-label') paymentTermsLabel = 'Payment time frame';
  @Input('delivery-terms-label') deliveryTermsLabel = 'Delivery terms';
  @Input('total-price-label') totalPriceLabel = 'Total Price';
  @Input('quantity-label') quantityLabel = 'Quantity';
  @Input('min-qtylabel') minQtyLabel = '';
  @Input('title-text') titleText = 'Original Ask';
  @Input() documents = [];
  @Input('custom-class') customClass = 'col p-0';
  @Input('price-font-size') priceFontSize = '50px';
  @Input('price-font-color') priceFontColor = '#ffffff';
  @Input('list-font-color') listFontColor = '';
  @Input('list-font-size') listFontSize = '1.5';
  @Input('bid-title-font-color') bidTitleFontColor = '';
  @Input('bid-title-font-size') bidTitleFontSize = '';
  @Input('bid-detail-font-color') bidDetailFontColor = '';
  @Input('bid-detail-font-size') bidDetailFontSize = '';
  @Input('price-font-weight') priceFontWeight = '';
  @Input('list-font-weight') listFontWeight = '';
  @Input('bid-title-font-weight') bidTitleFontWeight = '';
  @Input('bid-detail-font-weight') bidDetailFontWeight = '';
  @Input('title-font-color') titleFontColor = '';
  @Input('title-font-size') titleFontSize = '';
  @Input('title-font-weight') titleFontWeight = '';
  @Input('aside-bg-Color') asideBgColor;
  @Input('product-payment-custom-class') productPaymentCustomClass =
    'productPayment';
  @Input('bid-details-custom-class') bidDetailCustomClass = 'bid-details';
  @Input('article-alignment-custom-class') articleAlignmentCustomClass =
    'article';
  constructor() { }

  ngOnInit() { }
}
