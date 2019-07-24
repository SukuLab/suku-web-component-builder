import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'suku-wysiwyg-editor',
  templateUrl: './suku-wysiwyg-editor.component.html',
  styleUrls: ['./suku-wysiwyg-editor.component.scss']
})
export class SukuWysiwygEditorComponent implements OnInit {

  htmlQuillContent;
  @Input() form: FormGroup;
	@Input() control = 'productTraceability';
	public moduleConfig = {
		toolbar: [
			[ 'bold', 'italic', 'underline', 'strike' ], // toggled buttons
			[ 'blockquote', 'code-block' ],

			[ { header: 1 }, { header: 2 } ], // custom button values
			[ { list: 'ordered' }, { list: 'bullet' } ],
			[ { script: 'sub' }, { script: 'super' } ], // superscript/subscript
			[ { indent: '-1' }, { indent: '+1' } ], // outdent/indent
			[ { direction: 'rtl' } ], // text direction

			// [ { size: [ 'small', false, 'large', 'huge' ] } ], // custom dropdown
			[ { header: [ 1, 2, 3, 4, 5, 6, false ] } ],

			[ { color: [] }, { background: [] } ], // dropdown with defaults from theme
			[ { font: [] } ],
			[ { align: [] } ],
			[ 'clean' ] // remove formatting button
		]
	};
	constructor() {}

	ngOnInit() {
		// this.htmlQuillContent =
		// 	'<h2 class="ql-align-justify"><strong>JCET006 NFC</strong> rfid animal identification tracking management number plastic card cattle cow <em><u>livestock</u></em> ear tag.<span style="color: rgb(51, 51, 51);">&nbsp;</span></h2><p><br></p><p><strong>1.Specializing:&nbsp;</strong></p><p><span style="color: rgb(51, 51, 51);">Our&nbsp;company&nbsp;is&nbsp;specializing&nbsp;in&nbsp;the&nbsp;production&nbsp;of&nbsp;various&nbsp;kinds&nbsp;of&nbsp;security&nbsp;seals:&nbsp;high&nbsp;security&nbsp;bolt&nbsp;seals,&nbsp;cable&nbsp;seals,&nbsp;plastic&nbsp;seals,&nbsp;meter&nbsp;seals,&nbsp;metal&nbsp;strap&nbsp;seals&nbsp;and&nbsp;barrier&nbsp;seals,&nbsp;etc.&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">2.Variety:&nbsp;</strong></p><p><span style="color: rgb(51, 51, 51);">The&nbsp;company&nbsp;producesvarious&nbsp;kinds&nbsp;of&nbsp;security&nbsp;seals,&nbsp;various&nbsp;types,&nbsp;shapes&nbsp;and&nbsp;sizes&nbsp;of&nbsp;the&nbsp;seals,&nbsp;in&nbsp;order&nbsp;to&nbsp;meet&nbsp;your&nbsp;different&nbsp;needs.&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">3.Quality&nbsp;Controlled&nbsp;: </strong></p><h4>The&nbsp;company&nbsp;is&nbsp;considering.<u>”</u><strong style="color: rgb(0, 97, 0);"><u>Quality&nbsp;First</u></strong><strong style="color: rgb(230, 0, 0);"><u>,</u></strong><strong style="color: rgb(102, 102, 0);"><u>&nbsp;</u></strong><strong style="color: rgb(0, 71, 178);"><u>Service&nbsp;Firs</u></strong><u style="color: rgb(0, 71, 178);">t</u><u>"&nbsp;</u></h4><p><strong style="color: rgb(51, 51, 51);">4.Favorable&nbsp;Price:</strong></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;</strong><span style="color: rgb(51, 51, 51);">We&nbsp;will&nbsp;provide&nbsp;you&nbsp;favorable&nbsp;and&nbsp;reasonable&nbsp;price!&nbsp;The&nbsp;larger&nbsp;quantity,the more discount.</span></p><p><strong style="color: rgb(51, 51, 51);">5.Timely&nbsp;Delivery:</strong></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;</strong><span style="color: rgb(51, 51, 51);">No&nbsp;matter how small or big your&nbsp;order&nbsp;is,&nbsp;timely&nbsp;delivery&nbsp;is&nbsp;our&nbsp;long-term&nbsp;goal!&nbsp;</span></p><p><strong style="color: rgb(51, 51, 51);">6.Special&nbsp;Customized:</strong></p><p><span style="color: rgb(51, 51, 51);">&nbsp;At&nbsp;the&nbsp;same&nbsp;time,&nbsp;we&nbsp;provide&nbsp;customizing&nbsp;service,&nbsp;if&nbsp;all&nbsp;of&nbsp;our&nbsp;products&nbsp;cannot&nbsp;meet&nbsp;your&nbsp;requests,&nbsp;we&nbsp;also&nbsp;can&nbsp;specially&nbsp;customize the&nbsp;products&nbsp;for you&nbsp;as&nbsp;per&nbsp;your&nbsp;samples,&nbsp;drawings,&nbsp;etc.</span></p>';
	}

	onContentChanged(data) {
		console.log(data.html);
	}

}
