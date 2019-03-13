import { Component, OnInit, Input } from '@angular/core';
declare var dwolla: any;
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'suku-dwolla-funding-source',
  templateUrl: './suku-dwolla-funding-source.component.html',
  styleUrls: ['./suku-dwolla-funding-source.component.scss']
})
export class SukuDwollaFundingSourceComponent implements OnInit {
  @Input('iav-token') iavtoken = 'hZ29TKB3CRpZ6z2MBPmMFYKKTbdbXLWAYUOt3A5niEoQs8mvqw' ;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getDwollaHtml() {
    console.log('triggered');
      dwolla.configure('sandbox');
      dwolla.iav.start(this.iavtoken, {
      container: 'iavContainer',
      stylesheets: [
        'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext',
      ],
      microDeposits: true,
      backButton: true,
      fallbackToMicroDeposits: true
    }, function(err, res) {
      console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
      if(err) {
        // this.snackbar(err.message);
      }
    });
  }

  // snackbar(msg) {
	// 	this.snackBar.open(msg, 'close', {
	// 		verticalPosition: 'bottom',
	// 		horizontalPosition: 'right',
// 		duration: 3500
	// 	});
	// }

}
