import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDwollaFundingAgreementComponent } from './suku-dwolla-funding-agreement.component';

describe('SukuDwollaFundingAgreementComponent', () => {
  let component: SukuDwollaFundingAgreementComponent;
  let fixture: ComponentFixture<SukuDwollaFundingAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDwollaFundingAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDwollaFundingAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
