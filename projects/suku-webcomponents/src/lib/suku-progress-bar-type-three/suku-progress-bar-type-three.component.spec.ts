import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProgressBarTypeThreeComponent } from './suku-progress-bar-type-three.component';

describe('SukuProgressBarTypeThreeComponent', () => {
  let component: SukuProgressBarTypeThreeComponent;
  let fixture: ComponentFixture<SukuProgressBarTypeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProgressBarTypeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProgressBarTypeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
