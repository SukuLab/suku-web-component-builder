import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-chat-widget',
  templateUrl: './suku-chat-widget.component.html',
  styleUrls: ['./suku-chat-widget.component.scss']
})
export class SukuChatWidgetComponent implements OnInit {

  @Input() chat = {
    labelOne: 'Negotiation Chat Box',
    labelOneId: 'negotiationChatBox',
    labelTwo: 'Chatting with:',
    labelTwoId: 'chattingWith'
  };
  @Input() contentOne = 'Camila';
  @Input() chatStatus = false;
  @Input() messageData = [];

  constructor() { }

  ngOnInit() {
    this.scrollDown();
  }

  scrollDown() {
    const sss = document.getElementById('scrollDiv');
    if (sss) {
      sss.scrollTop = sss.scrollHeight;
    }
  }

  sendMessage(val) {
    console.log('test-send', val);
    this.scrollDown();
  }

}

