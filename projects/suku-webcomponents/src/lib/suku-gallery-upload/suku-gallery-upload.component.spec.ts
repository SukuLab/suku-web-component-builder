import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuGalleryUploadComponent } from './suku-gallery-upload.component';

describe('SukuGalleryUploadComponent', () => {
  let component: SukuGalleryUploadComponent;
  let fixture: ComponentFixture<SukuGalleryUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SukuGalleryUploadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuGalleryUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
