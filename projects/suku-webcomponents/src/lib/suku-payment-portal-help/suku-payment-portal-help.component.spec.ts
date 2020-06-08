import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuPaymentPortalHelpComponent } from './suku-payment-portal-help.component';

describe('SukuPaymentPortalHelpComponent', () => {
  let component: SukuPaymentPortalHelpComponent;
  let fixture: ComponentFixture<SukuPaymentPortalHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuPaymentPortalHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuPaymentPortalHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
