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
	@Input() placeholder = 'Enter text';
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

	ngOnInit() {	}

	onContentChanged(data) {
		console.log(data.html);
	}

}
