import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuGalleryComponent } from './suku-gallery.component';

describe('SukuGalleryComponent', () => {
  let component: SukuGalleryComponent;
  let fixture: ComponentFixture<SukuGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
