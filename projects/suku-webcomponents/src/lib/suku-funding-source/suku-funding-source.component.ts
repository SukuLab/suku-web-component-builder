import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-funding-source',
  templateUrl: './suku-funding-source.component.html',
  styleUrls: ['./suku-funding-source.component.scss']
})
export class SukuFundingSourceComponent implements OnInit {

  constructor() { }
  @Input() fundingDetails = [];
  @Input() defaultText = 'Default';
  @Input() defaultbankName = 'Bank Name';
  @Input() headerOneTxt = 'FUNDING';
  @Input() headerTwoText = 'SOURCES';
  @Input() defaultBtnTxt = 'Make Default';
  @Input() removeBtnTxt = 'Remove';
  @Input() defaultBtnId = 'defaultBtnId';
  @Input() removeBtnId = 'removeBtnId';
  @Input() defaultRemoveBtnTxt = 'Remove';
  @Input() achWalletTxt = 'ACH Wallet';
  @Input() balanceLblTxt = 'Balance';
  @Input() achMakeDefaultBtnText = 'Make Default';
  @Input() achMakeDefaultBtnId = 'achMakeDefaultBtnId';
  @Input() DefaultaccountNumber = 'XXXXXX0220';
  @Input() WalletBalance = 0.000;
  @Input() defaultRemoveBtnId = 'defaultRemoveBtnId';
  @Output() removeDefault = new EventEmitter();
  @Output() makeDefaultAction = new EventEmitter();
  @Output() removeSourceAction = new EventEmitter();
  @Output() achMakeDefaultAction = new EventEmitter();
  @Output() addSource = new EventEmitter();
  ngOnInit() {
  }

}