import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuTrackProgressBarComponent } from './suku-track-progress-bar.component';

describe('SukuTrackProgressBarComponent', () => {
  let component: SukuTrackProgressBarComponent;
  let fixture: ComponentFixture<SukuTrackProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuTrackProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuTrackProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
