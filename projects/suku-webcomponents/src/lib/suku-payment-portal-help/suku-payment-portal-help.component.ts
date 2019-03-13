import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-payment-portal-help',
  templateUrl: './suku-payment-portal-help.component.html',
  styleUrls: ['./suku-payment-portal-help.component.scss']
})
export class SukuPaymentPortalHelpComponent implements OnInit {

  constructor() { }
  @Input() helpPage = 'FIND ALL INFORMATION REQUIRED FOR THE HELP PAGE';
  @Input() helpPageHref = 'https://docs.google.com/document/d/11BYv2KVQSEfProqHHxvoxEsOyxZwuqNu2UXTQnSQS14/edit#heading=h.l7cgm61nvh7m';
  ngOnInit() {

  }

}
