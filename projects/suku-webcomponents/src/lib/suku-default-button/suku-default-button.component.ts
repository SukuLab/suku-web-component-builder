import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'suku-default-button',
  templateUrl: './suku-default-button.component.html',
  styleUrls: ['./suku-default-button.component.scss']
})
export class SukuDefaultButtonComponent implements OnInit {
 @Input() name;
 @Input() id;
 @Output() trigger = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
