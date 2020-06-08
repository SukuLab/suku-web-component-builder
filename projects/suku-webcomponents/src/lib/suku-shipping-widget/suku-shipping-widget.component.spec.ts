import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuShippingWidgetComponent } from './suku-shipping-widget.component';

describe('SukuShippingWidgetComponent', () => {
  let component: SukuShippingWidgetComponent;
  let fixture: ComponentFixture<SukuShippingWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuShippingWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuShippingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
