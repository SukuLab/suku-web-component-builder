import { Component, Input } from '@angular/core';

@Component({
	selector: 'suku-response',
	templateUrl: './suku-response.component.html',
	styleUrls: ['./suku-response.component.scss']
})
export class SukuResponseComponent {
	@Input('custom-class') customClass = 'filterResult text-center col p-0';
	@Input() title = 'No results found';
	@Input('title-id') titleId = 'noResultsFound';
	@Input('title-size') titleSize = '2';
	@Input('title-color') titleColor = 'black';
	@Input('title-weight') titleWeight = '300';
	@Input('title-custom-class') titleCustomClass;
	@Input() description = 'Try changing your filter settings on the left to see a different set of results.';
	@Input('description-id') descriptionId = 'description';
	@Input('description-size') descriptionSize = '18';
	@Input('description-color') descriptionColor = '#979797';
	@Input('description-weight') descriptionWeight = '400';
	@Input('description-custom-class') descriptionCustomClass;
	@Input('bg-color') bgColor = '';
	@Input('img-custom-class') imgCustomClass = 'imgCustomClass mb-4 mt-4';
	@Input('suku-response-logo') sukuResponseLogo = '';
	@Input('icon') icon = 'suku-no-data-search-icon';
	@Input('icon-id') iconId = 'suku-no-data-search-icon';
	@Input('icon-custom-class') iconCustomClass = '';
	@Input('sub-custom-class') subCustomClass = 'col-lg-5 p-0 col-sm-12 justify-content-center mx-auto';
}

