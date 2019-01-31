import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'suku-card-title',
  templateUrl: './suku-card-title.component.html',
  styleUrls: ['./suku-card-title.component.scss']
})
export class SukuCardTitleComponent implements OnInit {

  @Input() cardTitleName = 'INTEREST NAME';
  @Input() cardTitleId = 'heading';
  @Input() cardTitlesize = '12';
  @Input() cardTitlecolor = '#b6b6b6';
  @Input() cardTitleweight;
  @Input() cardContentName  = 'Spring Cases';
  @Input() cardContentId = 'Content';
  @Input() cardContentsize = '17';
  @Input() cardContentcolor = '#1d1d1d';
  @Input() cardContentweight  = '700';
  @Input() customclassContent  = '';
  @Input() customclasstitle  = '';
  constructor() { }

  ngOnInit() {
  }

}
