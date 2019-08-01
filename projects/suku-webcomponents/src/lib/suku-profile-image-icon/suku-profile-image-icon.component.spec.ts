import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProfileImageIconComponent } from './suku-profile-image-icon.component';

describe('SukuProfileImageIconComponent', () => {
  let component: SukuProfileImageIconComponent;
  let fixture: ComponentFixture<SukuProfileImageIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProfileImageIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProfileImageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
