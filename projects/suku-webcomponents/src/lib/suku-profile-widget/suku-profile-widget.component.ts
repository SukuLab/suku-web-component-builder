import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'suku-profile-widget',
  templateUrl: './suku-profile-widget.component.html',
  styleUrls: ['./suku-profile-widget.component.scss']
})
export class SukuProfileWidgetComponent implements OnInit {
  @Input() image = '../../assets/images/browser.png';
	@Input('user-name') userName = 'Vairog';
	@Input() nameWeight = '400';
	@Input() nameCustomClass = 'mb-0 mt-1 pl-1';
	@Input() nameSize = '33.4';
	@Input() nameColor;
	@Input('account-type') accountType = 'Manufacturer';
	@Input() accountWeight = '400';
	@Input() accountCustomClass = 'pl-2';
	@Input() accountSize = '17';
	@Input() accountColor = '';
	@Input() ratingCustomClass = 'pl-2 mb-2 pt-3';
	@Input() rateDetails = 'based on 14 rating';
	@Input() rateColor = '';
	@Input() ratingWeight = '400';
  @Input() rDustomClass = 'pl-2';
  @Input() id = '';
  myHTML;
	_rate = 0;
	@Output() rating = new EventEmitter();
	@Input() customClass;
	@Input()
	set ratingValue(ratingValue: number) {
		this._rate = ratingValue;
		console.log('', this._rate);
	}
  constructor() {
    this.callOfStarts(this._rate);
  }
  callOfStarts(e) {
		switch (true) {
			case e === 0:
				this.myHTML = `
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      </div>`;
				break;

			case e <= 0.5:
				this.myHTML = `
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      </div>`;
				break;

			case e > 0.5 && e <= 1:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 1.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e > 1.5 && e <= 2:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 2.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e > 2.5 && e <= 3:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 3.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e > 3.5 && e <= 4:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-o f22"></span> </div>`;
				break;

			case e <= 4.5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star-half-empty starChecked f22"></span>
    </div>`;
				break;
			case e > 4.5 && e <= 5:
				this.myHTML = `
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
      <span class="fa fa-star starChecked f22"></span>
       </div>`;
				break;
			default:
				break;
		}
	}

  ngOnInit() {
  }

}
