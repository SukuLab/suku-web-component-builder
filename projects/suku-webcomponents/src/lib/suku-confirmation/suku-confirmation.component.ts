import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'suku-confirmation',
  templateUrl: './suku-confirmation.component.html',
  styleUrls: ['./suku-confirmation.component.scss']
})
export class SukuConfirmationComponent implements OnInit {
  @Input('Title-one') Titleone;
  @Input('Title-two') Titletwo;
  @Input('Title-three') Titlethree;
  @Input('Button-one') Buttonone = "Cancel";
  @Input('Button-one-id') Buttononeid;
  @Input('Button-two') Buttontwo = "Submit";
  @Input('Button-two-id') Buttontwoid;
  @Output() triggerone = new EventEmitter();
  @Output() triggertwo = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
