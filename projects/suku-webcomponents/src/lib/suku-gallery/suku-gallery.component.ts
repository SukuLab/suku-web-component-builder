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
  @ViewChild('video') videoElement: ElementRef;
  prevBtnVisible = true;
  nextBtnVisible = true;
  autoplay = false;
  constructor() { }

  ngOnInit() {
  }

  active(i, position) {
    console.log(i);
    this.videoElement.nativeElement.pause();
    this.autoplay = false;
    this.gallery.forEach((element, index) => {
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

