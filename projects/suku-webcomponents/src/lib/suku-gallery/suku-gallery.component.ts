import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'suku-gallery',
  templateUrl: './suku-gallery.component.html',
  styleUrls: ['./suku-gallery.component.scss']
})
export class SukuGalleryComponent implements OnInit {
  @Input() gallery = [];
  @Input() size = 'default';
  @Input('gallery-id') galleryId = 'demo';
  @Input('carousel-height') carouselHeight;
  @Input('carousel-width') carouselWidth;
  @Input('img-height') imgHeight;
  @Input('img-width') imgWidth;
  @Input('vid-height') vidHeight;
  @Input('vid-width') vidWidth;
  @Input('control-next-icon-customclass') controlNextIconCustomClass;
  @Input('control-prev-icon-customclass') controlPrevIconCustomClass;
  prevBtnVisible = true;
  nextBtnVisible = true;
  autoplay = false;
  @ViewChild('video') videoElement: ElementRef;
  constructor() { }

  ngOnInit() {
    // this.gallery = [
    //   {
    //     index: 'one',
    //     type: 'image',
    //     checked: true,
    //     link:
    //       'https://leiscreekcattleco.com/wp-content/uploads/2018/10/WhyAkaushiPhoto.jpg'
    //   },
    //   {
    //     index: 'two',
    //     type: 'image',
    //     checked: false,
    //     link:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaurornWO8dpOQVsH3hxOjonAzHbbcMsOA0g6_ziGZVT92HBsP'
    //   },
    //   {
    //     index: 'three',
    //     type: 'video',
    //     checked: false,
    //     link:
    //       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    //   },
    //   {
    //     index: 'four',
    //     type: 'image',
    //     checked: false,
    //     link:
    //       'https://www.uaex.edu/farm-ranch/animals-forages/images/baldy%20with%20calf%20square.JPG'
    //   },
    //   {
    //     index: 's',
    //     type: 'video',
    //     checked: false,
    //     link:
    //       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    //   },
    //   {
    //     index: 'one',
    //     type: 'image',
    //     checked: false,
    //     link:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXN6xiu-IvpxOb93cBuTrqJwXM5IcMStHAMKpMLXx7K6qfENb'
    //   },
    //   {
    //     index: 'one',
    //     type: 'image',
    //     checked: false,
    //     link:
    //       'https://upload.wikimedia.org/wikipedia/commons/f/f6/Limia_cattle.jpg'
    //   },
    //   {
    //     index: 'one',
    //     type: 'image',
    //     checked: false,
    //     link:
    //       'http://www.broken-spur-ranch.com/Sites/10/image/Zabaco%20Feb.%20-%20Copy.jpg'
    //   },
    //   {
    //     index: 'two',
    //     type: 'image',
    //     checked: false,
    //     link:
    //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIJXakzsFcGAsLMqlbwWFZtZqrliH6rJN6HdWAHPfW36EQF08'
    //   }
    // ];
  }

  active(i, position) {
    console.log(i);
    this.videoElement.nativeElement.pause();
    this.autoplay = false;
    this.gallery.forEach((element, index) => {
      // if (i + 1 == this.gallery[this.gallery.length]) {
      //   this.nextBtnVisible = false;
      //   this.prevBtnVisible = true;
      // } else {
      //   this.nextBtnVisible = true;
      // }

      // if (i == 1) {
      //   this.nextBtnVisible = true;
      // } else {
      //   this.prevBtnVisible = false;
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
    console.log('link', e);
    const modal = document.getElementById('myGalleryModal');
    const modalImg = <HTMLInputElement>document.getElementById('img01');
    const modalVid = <HTMLInputElement>document.getElementById('vid');
    modal.style.display = 'block';
    if (e.type == 'image') {
      modalImg.src = e.link;
      modalImg.style.display = 'block';
      modalVid.style.display = 'none';
    } else {
      modalVid.style.display = 'block';
      modalImg.style.display = 'none';
      modalVid.src = e.link;
    }
  }

  closeModal() {
    const modal = document.getElementById('myGalleryModal');
    modal.style.display = 'none';
  }

  start() {
    var i = 1;
    function Move() {
      i = (this.gallery.length % 2) + 1; // 4 is the Number of image in slider
      (<HTMLInputElement>document.getElementById('i' + i)).checked = true;
    }
  }

}

