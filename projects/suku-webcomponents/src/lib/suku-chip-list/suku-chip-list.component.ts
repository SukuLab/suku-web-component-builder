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
  tempDataOne = <any>[];
	tempDataTwo = <any>[];
  constructor() { }

  ngOnInit() {
  }

	downloadDoc(val,docIndex) {
    this.tempDataOne.map((d) => {
      d.value = val;
      d.index = docIndex
    });
		this.actionOne.emit(this.tempDataOne);
  }
  
  deleteDoc(val,docIndex) {
    this.tempDataTwo.map((d) => {
      d.value = val;
      d.index = docIndex
    });
		this.actionTwo.emit(this.tempDataTwo);
	}
}
