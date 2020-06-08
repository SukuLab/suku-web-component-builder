import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'suku-bid-info',
  templateUrl: './suku-bid-info.component.html',
  styleUrls: ['./suku-bid-info.component.scss']
})
export class SukuBidInfoComponent implements OnInit {
  @Input() bids = '374';
	@Input('bid-size') bidSize = '17';
	@Input('bid-color') bidColor = 'black';
	@Input('bid-weight') bidWeight = '600';
	@Input('bid-customclass') bidCustomClass = '';
	@Input('bid-headingcustomclass') bidHeadingCustomClass = '';
	@Input('percent-customclass') percentcustomClass = '';
	@Input('percent-headingcustomclass') percentageHeadingcustomClass = '';
	@Input('bid-heading') bidHeading = 'bids';
	@Input('bid-heding-size') bidHeadingSize = '14';
	@Input('bid-heading-color') bidHeadingColor = 'black';
  @Input('bid-heading-weight') bidHeadingWeight = '500';
  @Input() id = 'bidInfo';
	@Input() percent = '10%';
	@Input('percentage-size') percentSize = '17';
	@Input('percentage-color') percentColor = 'black';
	@Input('percentage-weight') percentWeight = '600';
	@Input('percentage-heading') percentHeading = 'fulfill';
	@Input('percentage-heading-size') percentHeadingSize = '14';
	@Input('percentage-heading-color') percentHeadingColor = 'black';
	@Input('percentage-heading-weight') percentHeadingWeight = '500';

  constructor() { }

  ngOnInit() {
  }

}
