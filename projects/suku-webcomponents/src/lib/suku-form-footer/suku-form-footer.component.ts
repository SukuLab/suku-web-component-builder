import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-form-footer',
  templateUrl: './suku-form-footer.component.html',
  styleUrls: ['./suku-form-footer.component.scss']
})
export class SukuFormFooterComponent implements OnInit {
  @Input('btn-one-label') btnOneLabel = 'cancel';
  @Input('btn-one-id') btnOneId = 'primary';
  @Input('btn-one-size') btnOneSize = '1';
  @Input('btn-one-color') btnOneColor = '';
  @Input('btn-one-weight') btnOneWeight = '400';
  @Input('btn-one-custom-class') btnOneCustomClass = '';
  @Input('btn-one-visible') btnOneVisible = 'true';
  @Output() btnOneAction = new EventEmitter();

  @Input('btn-two-label') btnTwoLabel = 'save as draft';
  @Input('btn-two-id') btnTwoId = 'primary';
  @Input('btn-two-size') btnTwoSize = '1';
  @Input('btn-two-color') btnTwoColor = '';
  @Input('btn-two-weight') btnTwoWeight = '400';
  @Input('btn-two-visible') btnTwoVisible = 'true';
  @Input('btn-Two-custom-class') btnTwoCustomClass = '';
  @Output() btnTwoAction = new EventEmitter();

  @Input('btn-three-label') btnThreeLabel = 'back';
  @Input('btn-three-id') btnThreeId = 'primary';
  @Input('btn-three-size') btnThreeSize = '1';
  @Input('btn-three-color') btnThreeColor = '';
  @Input('btn-three-weight') btnThreeWeight = '600';
  @Input('btn-three-visible') btnThreeVisible = 'true';
  @Input('btn-three-custom-class') btnThreeCustomClass = '';
  @Input('btn-three-disable-value') btnThreeDisableValue: Boolean;
  @Output() btnThreeAction = new EventEmitter();

  @Input('btn-four-label') btnFourLabel = 'back';
  @Input('btn-four-id') btnFourId = 'primary';
  @Input('btn-four-size') btnFourSize = '1';
  @Input('btn-four-color') btnFourColor = '';
  @Input('btn-four-weight') btnFourWeight = '600';
  @Input('btn-four-visible') btnFourVisible = 'true';
  @Input('btn-four-custom-class') btnFourCustomClass = '';
  @Input('btn-four-disable-value') btnFourDisableValue: Boolean;
  @Output() btnFourAction = new EventEmitter();

  @Input('btn-type') btnType = 'primary';
  constructor() { }

  ngOnInit() {
  }

}
