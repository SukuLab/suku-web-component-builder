import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuBidInfoComponent } from './suku-bid-info.component';

describe('SukuBidInfoComponent', () => {
  let component: SukuBidInfoComponent;
  let fixture: ComponentFixture<SukuBidInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuBidInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuBidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
