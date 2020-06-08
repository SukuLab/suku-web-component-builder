import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuRatingStarComponent } from './suku-rating-star.component';

describe('SukuRatingStarComponent', () => {
  let component: SukuRatingStarComponent;
  let fixture: ComponentFixture<SukuRatingStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuRatingStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuRatingStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
