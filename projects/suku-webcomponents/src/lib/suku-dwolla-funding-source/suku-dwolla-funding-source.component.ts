import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var dwolla: any;
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'suku-dwolla-funding-source',
  templateUrl: './suku-dwolla-funding-source.component.html',
  styleUrls: ['./suku-dwolla-funding-source.component.scss']
})
export class SukuDwollaFundingSourceComponent implements OnInit {
  @Input('iav-token') iavtoken = 'hZ29TKB3CRpZ6z2MBPmMFYKKTbdbXLWAYUOt3A5niEoQs8mvqw' ;
  @Output() action = new EventEmitter();
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getDwollaHtml() {
    (<HTMLInputElement>document.getElementById('start')).disabled = true;
    if (document.getElementById('iavContainer')) {
      const list = document.getElementById('iavContainer');
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
    }
    console.log('triggered', this.iavtoken);
      dwolla.configure('sandbox');
      dwolla.iav.start(this.iavtoken, {
      container: 'iavContainer',
      stylesheets: [
        'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext',
      ],
      microDeposits: true,
      backButton: true,
      fallbackToMicroDeposits: true
    }, (err, res) =>  {
      console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
      if (err) {
        console.log('failed');
        (<HTMLInputElement>document.getElementById('start')).disabled = false;
      }
    });
  }

}