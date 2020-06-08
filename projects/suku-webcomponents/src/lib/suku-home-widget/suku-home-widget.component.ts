import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-home-widget',
  templateUrl: './suku-home-widget.component.html',
  styleUrls: ['./suku-home-widget.component.scss']
})
export class SukuHomeWidgetComponent implements OnInit {
  @Input() id;
  @Input() color = '#f1f4f5';
  @Input() bgColor = '#76767b';
  @Output() routerLink = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 }
