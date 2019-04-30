import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuShippingInfoWidgetComponent } from './suku-shipping-info-widget.component';

describe('SukuShippingInfoWidgetComponent', () => {
  let component: SukuShippingInfoWidgetComponent;
  let fixture: ComponentFixture<SukuShippingInfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuShippingInfoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuShippingInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
