import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'suku-default-button',
  templateUrl: './suku-default-button.component.html',
  styleUrls: ['./suku-default-button.component.scss']
})
export class SukuDefaultButtonComponent implements OnInit {
  @Input() id = 'deafultButton';
  @Input() size = '1';
  @Input() color = 'white';
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
