import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-response',
  templateUrl: './suku-response.component.html',
  styleUrls: ['./suku-response.component.scss']
})
export class SukuResponseComponent {
	@Input() customClass = 'filterResult text-center col';
	@Input() iconClass = 'fa fa-frown-o responseIcon';
	@Input() iconColor = '#c0ca33';
	@Input() content = 'no data available';
	@Input() bgColor = '';
}
