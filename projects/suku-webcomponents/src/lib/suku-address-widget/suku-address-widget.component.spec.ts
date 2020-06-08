import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuAddressWidgetComponent } from './suku-address-widget.component';

describe('SukuAddressWidgetComponent', () => {
  let component: SukuAddressWidgetComponent;
  let fixture: ComponentFixture<SukuAddressWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuAddressWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuAddressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
