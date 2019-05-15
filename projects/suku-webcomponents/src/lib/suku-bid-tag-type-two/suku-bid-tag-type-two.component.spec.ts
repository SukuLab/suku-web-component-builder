import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuLargeBidTagComponent } from './suku-bid-tag-type-two.component';

describe('SukuLargeBidTagComponent', () => {
  let component: SukuLargeBidTagComponent;
  let fixture: ComponentFixture<SukuLargeBidTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuLargeBidTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuLargeBidTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
