import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'suku-loader',
    templateUrl: './suku-loader.component.html',
    styleUrls: ['./suku-loader.component.scss']
})
export class SukuLoaderComponent implements OnInit {
  
@Input('waiting-message') waitingMessage = 'please wait...';
@Input('loding-description') lodingDescription = 'The document you are downloading is being authenticated against the SUKU Blockchain.';
@Input('loading-message') loadingMessage = 'Please wait momentarily while this process completes...';
  constructor() { }

  ngOnInit() {
  }

}
