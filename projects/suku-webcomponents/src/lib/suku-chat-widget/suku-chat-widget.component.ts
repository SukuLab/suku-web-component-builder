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
  _touserID;
  _initialScrollHeight;
  _showScrollDownIcon;

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
    console.log('Scroll Event', event.target.scrollTop);
    console.log('_initialScrollHeight', this._initialScrollHeight.scrollHeight);
    if ((this._initialScrollHeight.scrollHeight - event.target.scrollTop) > 390) {
      this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
      console.log("true");
    } else {
      this._showScrollDownIcon = false;
    }
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
      this._touserID = this._messageObj.receiver.userId;
    }
    this._initialScrollHeight = document.querySelector('.chatBox');
  }

  action() {
    if (this.messageData) {
      this.userAction.emit(this.messageData[0].receiver.userId);
    }
  }

  sendMessage(val) {
    console.log('test-send', val);
    this.sendmessage.emit(val);
  }

  scrollToBottomOnClik() {
    const someElement = document.querySelector('.chatBox');
    console.log('sd', someElement.scrollTop);
    const duration = 300;
    this.animateScroll(duration);
  }

  animateScroll(duration) {
    const someElement = document.getElementById('scrollDiv');
    const start = someElement.scrollTop;
    const end = someElement.scrollHeight;
    const change = end - start;
    const increment = 20;
    function easeInOut(currentTime, startPos, changePos, delay) {
      currentTime /= delay / 2;
      if (currentTime < 1) {
        return changePos / 2 * currentTime * currentTime + startPos;
      }
      currentTime -= 1;
      return -changePos / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }
    function animate(elapsedTime) {
      elapsedTime += increment;
      const position = easeInOut(elapsedTime, start, change, duration);
      someElement.scrollTop = position;
      if (elapsedTime < duration) {
        setTimeout(function () {
          animate(elapsedTime);
        }, increment);
      }
    }
    animate(0);
  }

}

