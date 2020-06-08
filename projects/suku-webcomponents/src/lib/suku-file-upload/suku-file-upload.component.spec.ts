import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuFileUploadComponent } from './suku-file-upload.component';

describe('SukuFileUploadComponent', () => {
  let component: SukuFileUploadComponent;
  let fixture: ComponentFixture<SukuFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
