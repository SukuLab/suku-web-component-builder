import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProgressBarComponent } from './suku-progress-bar.component';

describe('SukuProgressBarComponent', () => {
  let component: SukuProgressBarComponent;
  let fixture: ComponentFixture<SukuProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
