import { Component, Input } from '@angular/core';

@Component({
	selector: 'suku-response',
	templateUrl: './suku-response.component.html',
	styleUrls: ['./suku-response.component.scss']
})
export class SukuResponseComponent {
	@Input() customClass = 'filterResult text-center col p-0';
	@Input() iconClass = 'fa fa-frown-o responseIcon';
	@Input() iconColor = '#c0ca33';
	@Input() title = 'No results found';
	@Input() titleId = 'noResultsFound';
	@Input() titleSize = '26';
	@Input() titleColor = 'black';
	@Input() titleWeight = '300';
	@Input() description = 'Try changing your filter settings on the left to see a different set of results.';
	@Input() descriptionId = 'description';
	@Input() descriptionSize = '18';
	@Input() descriptionColor = '#979797';
	@Input() descriptionWeight = '400';
}
