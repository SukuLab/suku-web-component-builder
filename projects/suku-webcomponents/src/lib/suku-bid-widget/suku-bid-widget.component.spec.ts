import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuBidWidgetTagComponent } from './suku-bid-widget.component';

describe('SukuLargeBidTagComponent', () => {
  let component: SukuBidWidgetTagComponent;
  let fixture: ComponentFixture<SukuBidWidgetTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuBidWidgetTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuBidWidgetTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
