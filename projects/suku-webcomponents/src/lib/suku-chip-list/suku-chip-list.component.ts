import { Component, OnInit, Input ,	Output,	EventEmitter, } from '@angular/core';

@Component({
  selector: 'suku-chip-list',
  templateUrl: './suku-chip-list.component.html',
  styleUrls: ['./suku-chip-list.component.scss']
})
export class SukuChipListComponent implements OnInit {

  @Input('document-list') DocumentList = [];
  @Output('action-one') actionOne = new EventEmitter();
  @Output('action-two') actionTwo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

	downloadDoc(val) {
		this.actionOne.emit(val);
  }
  
  deleteDoc(val) {
		this.actionTwo.emit(val);
	}
}
