import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'suku-bid-tag',
	templateUrl: './suku-bid-tag.component.html',
	styleUrls: ['./suku-bid-tag.component.scss']
})
export class SukuBidTagComponent implements OnInit {
	@Input() prize = '$100';
	@Input() prizeSize = '50';
	@Input() prizeWeight = '500';
	@Input() prizeColor = 'white';
	@Input() prizeCustomClass = 'mb-0';
	@Input() prizeId = 'prize';
	@Input() unit = '/ UNIT';
	@Input() unitSize = '14';
	@Input() unitWeight = '500';
	@Input() unitColor = 'white';
	@Input() unitCustomClass = 'mt-3 pt-5 mb-0 ml-3';
	@Input() unitId = 'unit';
	@Input() qContent = '100 cases / box: 200 boxes';
	@Input() qSize = '15';
	@Input() qWeight = '500';
	@Input() qColor = 'white';
	@Input() qCustomClass = '';
	@Input() quantityId = 'quantity';
	@Input() pContent = '$40,000 total (80,000 SUKU)';
	@Input() pSize = '15';
	@Input() pWeight = '500';
	@Input() pColor = 'white';
	@Input() pCustomClass = 'mt-1 pb-2';
	@Input() totalPrizeId = 'totalPrice';
	@Input() bidtagclass = 'col p-2 suku-big-tag pl-4';

	constructor() { }

	ngOnInit() {
	}

}
