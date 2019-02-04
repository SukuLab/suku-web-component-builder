import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
	selector: 'suku-rating-star',
	templateUrl: './suku-rating-star.component.html',
	styleUrls: [ './suku-rating-star.component.scss' ]
})
export class SukuRatingStarComponent implements OnInit {
	myHTML;
	_rate = 0;
	@Output() action = new EventEmitter();
	@Input() customclass;
	@Input('rating-value')
	set ratingValue(ratingValue: number) {
		this._rate = ratingValue;
		console.log('', this._rate);
		this.callOfStarts(this._rate);
	}
	callOfStarts(e) {
		switch (true) {
			case e == 0:
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
	constructor() {}

	ngOnInit() {}
}
