import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-match-chip',
  templateUrl: './suku-match-chip.component.html',
  styleUrls: ['./suku-match-chip.component.scss']
})
export class SukuMatchChipComponent implements OnInit {
  @Input() image = '../../assets/images/manageTrack.png';
  @Input() imgId = 'img-id';
  @Output() match = new EventEmitter();
  @Output() userAction = new EventEmitter();
  @Input() customclass = 'col p-0';
  @Input() listNameSize = '16';
  @Input() listWeight = '600';
  @Input() listColor = 'black';
  @Input() listName = 'Super Computer';
  @Input() listCustomClass = '';
  @Input() prize = '10 SUKU';
  @Input() prizeSize = '14';
  @Input() prizeWeight = '500';
  @Input() prizeColor = '#3e3e3e';
  @Input() prizeCustomClass = 'mb-0 pt-2';
  @Input() date = 'LISTING EXPIRATION DATE';
  @Input() dateSize = '12';
  @Input() dateWeight = '500';
  @Input() dateColor = '#b6b6b6';
  @Input() dateCustomClass = '';
  @Input() dateV = '28 Nov 2018';
  @Input() dateVSize = '14';
  @Input() dateVWeight = '500';
  @Input() dateVColor = '#3e3e3e';
  @Input() dateVCustomClass = '';
  @Input() sell = 'SOLD BY';
  @Input() sellSize = '12';
  @Input() sellWeight = '500';
  @Input() sellColor = '#b6b6b6';
  @Input() sellCustomClass = '';
  @Input() sellV = 'John Smith';
  @Input() sellVSize = '14';
  @Input() sellVWeight = '500';
  @Input() sellVColor = '#3e3e3e';
  @Input() sellVCustomClass = 'c-pointer';
  @Input() id = 'suku-match-chip';
  @Input() sellerid = '0';

  constructor() {}

  ngOnInit() {}
}
