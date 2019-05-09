import { Component, OnInit, Input, ViewChild, Inject, HostListener, Output } from '@angular/core';
import { ScrollToBottomDirective } from './suku-chat-scroll-directive';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'suku-chat-widget',
  templateUrl: './suku-chat-widget.component.html',
  styleUrls: ['./suku-chat-widget.component.scss']
})
export class SukuChatWidgetComponent implements OnInit {
  _messageObj;
  _imgPlaceholder = '../assets/images/group.svg';
  _scrollHeight;
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
  @Input() userImg = '../assets/images/group.svg';
  @Input() toUserImg = '../assets/images/group.svg';
  @Output() sendmessage = new EventEmitter();
  @Output() userAction = new EventEmitter();
  @HostListener('scroll', ['$event'])
    scrollHandler(event) {
      console.log('Scroll Event', event);
      // const scrollTop = event.target.scrollTop;
      console.log('Scroll Event', event.target.scrollTop);
    }

  constructor() { }

  ngOnInit() {
    if (this.messageData.length > 0) {
      this._messageObj = {
        message: this.messageData[0].message,
        timestamp: this.messageData[0].dateTime,
        userId: this.messageData[0].sender.userId,
        sender: {
          userId: this.messageData[0].sender.userId,
          userName: this.messageData[0].sender.userName,
        },
        receiver: {
          userId: this.messageData[0].receiver.userId,
          userName: this.messageData[0].receiver.userName,
        }
      };
    }
  }

  action() {
    if (this.messageData) {
    this.userAction.emit(this.messageData[0].sender.userId);
    }
  }

  sendMessage(val) {
    console.log('test-send', val);
    this.sendmessage.emit(val);
    this.messageData.push(this._messageObj);
  }

  scrollToTop() {
    console.log('sd');
    // (function smoothscroll() {
    //     const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    //     if (currentScroll > 0) {
    //         window.requestAnimationFrame(smoothscroll);
    //         window.scrollTo(0, currentScroll - (currentScroll / 8));
    //     }
    // })();
}

}

