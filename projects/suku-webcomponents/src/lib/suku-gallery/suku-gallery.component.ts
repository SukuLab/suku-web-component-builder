import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'suku-gallery',
  templateUrl: './suku-gallery.component.html',
  styleUrls: ['./suku-gallery.component.scss']
})
export class SukuGalleryComponent implements OnInit {
  gallery = [];
  prevBtnVisible = true;
  nextBtnVisible = true;
  autoplay = false;
  @ViewChild('video') videoElement: ElementRef;
  // @HostListener('click', ['$event']) onClick(event: Event) {
  //   vid.pause();
  // }
  // @HostListener('document:keyup', ['$event'])
  // onKeyUp(ev: KeyboardEvent) {
  //   if (ev.code == 'Space') {
  //     const vid = <HTMLVideoElement>document.querySelector('video');
  //     if (vid.paused) {
  //       vid.play();
  //     } else {
  //       vid.pause();
  //     }
  //   }
  // }
  constructor() {
    //Pause newly created video elements
    // document.addEventListener("DOMNodeInserted", function (e) {
    //   var elem = e.target;
    //   if (elem.nodeName == "VIDEO") {
    //     elem.addEventListener("canplay", function (e) {
    //       console.log("HTML video auto pause: Video element was inserted after page load, pausing");
    //       elem.pause();
    //     });
    //   }
    // }, false);
  }

  ngOnInit() {
    this.gallery = [
      {
        index: 'one',
        type: 'image',
        checked: true,
        link: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      {
        index: 'two',
        type: 'image',
        checked: false,
        link: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        index: 'three',
        type: 'video',
        checked: false,
        link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        index: 'four',
        type: 'image',
        checked: false,
        link: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        index: 's',
        type: 'video',
        checked: false,
        link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      }
    ];
    this.start();
  }

  active(i, position) {
    console.log(i);
    this.videoElement.nativeElement.pause();
    this.autoplay = false;
    this.gallery.forEach((element, index) => {

      // if (i == this.gallery[this.gallery.length]) {
      //   this.nextBtnVisible = false;
      //   this.prevBtnVisible = true;
      // } else {
      //   this.nextBtnVisible = true;
      // }

      // if (i == 1) {
      //   this.nextBtnVisible = true;
      //   this.prevBtnVisible = false;
      // } else {
      //   this.prevBtnVisible = true;
      // }


      if (position == 'prev') {
        if (i > 0) {
          if (index == i - 1) {
            if (i != 0) {
              element.checked = true;
            }
          } else {
            if (i != 0) {
              element.checked = false;
            }
          }
          console.log('ele', i, position, element);
        }
      }

      if (position == 'next') {
        if (index == i + 1) {
          if (i < this.gallery.length - 1) {
            element.checked = true;
          }
        } else {
          if (i < this.gallery.length - 1) {
            element.checked = false;
          }
        }
        console.log('ele', i, position, element);
      }

    });
  }

  start() {
    var i = 1;
    function Move() {
      i = (this.gallery.length % 2) + 1; // 4 is the Number of image in slider
      (<HTMLInputElement>document.getElementById('i' + i)).checked = true;
    }
  }
}
