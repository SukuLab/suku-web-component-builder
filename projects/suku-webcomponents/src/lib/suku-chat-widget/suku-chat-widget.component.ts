import { Component, OnInit, Input, ViewChild, Inject, HostListener, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from 'events';
@Component({
  selector: 'suku-chat-widget',
  templateUrl: './suku-chat-widget.component.html',
  styleUrls: ['./suku-chat-widget.component.scss']
})
export class SukuChatWidgetComponent implements OnInit {
  _messageObj;
  _imgPlaceholder = '../assets/images/group.svg'
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;
  @Input() chat = {
    labelOne: 'Negotiation Chat Box',
    labelOneId: 'negotiationChatBox',
    labelTwo: 'Chatting with:',
    labelTwoId: 'chattingWith'
  };
  @Input() contentOne = 'Camila';
  @Input() chatStatus = false;
  @Input() messageData = [];
  @Input() IconSrc = '../assets/images/send-message-icon.png';
  @Output() message = new EventEmitter();
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      console.debug("Scroll Event");
    }
  constructor() { }

  ngOnInit() {
    this.scrollDown();
    if (this.messageData) {
      this._messageObj = {
        message: this.messageData[0].message,
        timestamp: this.messageData[0].dateTime,
        userId: this.messageData[0].from.userId,
        from: {
          userId: this.messageData[0].from.userId,
          userName: this.messageData[0].from.userName,
          userImg: this.messageData[0].from.userImg,
        },
        to: {
          userId: this.messageData[0].to.userId,
          userName: this.messageData[0].to.userName,
          userImg: this.messageData[0].to.userImg,
        }
      };
    }
  }

  scrollDown() {
    const sss = document.getElementById('scrollDiv');
    if (sss) {
      sss.scrollTop = sss.scrollHeight;
    }
  }

  sendMessage(val) {
    console.log('test-send', val);
    this._messageObj.message = val;
    this._messageObj.timestamp = new Date().toLocaleString();
    this.message.emit(this._messageObj);
    console.log("messageObj", this._messageObj);
    this.messageData.push(this._messageObj);
  }

}

