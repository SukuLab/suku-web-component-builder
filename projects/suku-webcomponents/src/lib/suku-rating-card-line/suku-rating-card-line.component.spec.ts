import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuRatingCardLineComponent } from './suku-rating-card-line.component';

describe('SukuRatingCardLineComponent', () => {
  let component: SukuRatingCardLineComponent;
  let fixture: ComponentFixture<SukuRatingCardLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuRatingCardLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuRatingCardLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
