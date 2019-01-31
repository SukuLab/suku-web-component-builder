import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuBidTagComponent } from './suku-bid-tag.component';

describe('SukuBidTagComponent', () => {
  let component: SukuBidTagComponent;
  let fixture: ComponentFixture<SukuBidTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuBidTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuBidTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
