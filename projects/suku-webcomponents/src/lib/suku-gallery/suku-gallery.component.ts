import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

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
        link:
          'https://leiscreekcattleco.com/wp-content/uploads/2018/10/WhyAkaushiPhoto.jpg'
      },
      {
        index: 'two',
        type: 'image',
        checked: false,
        link:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaurornWO8dpOQVsH3hxOjonAzHbbcMsOA0g6_ziGZVT92HBsP'
      },
      {
        index: 'three',
        type: 'video',
        checked: false,
        link:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        index: 'four',
        type: 'image',
        checked: false,
        link:
          'https://www.uaex.edu/farm-ranch/animals-forages/images/baldy%20with%20calf%20square.JPG'
      },
      {
        index: 's',
        type: 'video',
        checked: false,
        link:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        index: 'one',
        type: 'image',
        checked: true,
        link:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXN6xiu-IvpxOb93cBuTrqJwXM5IcMStHAMKpMLXx7K6qfENb'
      },
      {
        index: 'one',
        type: 'image',
        checked: true,
        link:
          'https://upload.wikimedia.org/wikipedia/commons/f/f6/Limia_cattle.jpg'
      },
      {
        index: 'one',
        type: 'image',
        checked: true,
        link:
          'http://www.broken-spur-ranch.com/Sites/10/image/Zabaco%20Feb.%20-%20Copy.jpg'
      },
      {
        index: 'two',
        type: 'image',
        checked: false,
        link:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIJXakzsFcGAsLMqlbwWFZtZqrliH6rJN6HdWAHPfW36EQF08'
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

  preview(e) {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const img = document.getElementById('myImg');
    const modalImg = <HTMLInputElement>document.getElementById('img01');
    const modalVid = <HTMLInputElement>document.getElementById('vid');
    const captionText = document.getElementById('caption');
    // img.onclick = function() {
    modal.style.display = 'block';
    if ((e.type == 'image')) {
      modalImg.src = e.link;
    } else {
      modalVid.src = e.link;
    }
    //   captionText.innerHTML = this.alt;
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    const span = document.getElementsByClassName('close')[0];
  }

  start() {
    var i = 1;
    function Move() {
      i = (this.gallery.length % 2) + 1; // 4 is the Number of image in slider
      (<HTMLInputElement>document.getElementById('i' + i)).checked = true;
    }
  }
}
