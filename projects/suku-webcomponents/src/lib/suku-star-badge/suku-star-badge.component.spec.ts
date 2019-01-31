import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuStarBadgeComponent } from './suku-star-badge.component';

describe('SukuStarBadgeComponent', () => {
  let component: SukuStarBadgeComponent;
  let fixture: ComponentFixture<SukuStarBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuStarBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuStarBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
