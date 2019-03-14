import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuTermsAndConditionsComponent } from './suku-terms-and-conditions.component';

describe('SukuTermsAndConditionsComponent', () => {
  let component: SukuTermsAndConditionsComponent;
  let fixture: ComponentFixture<SukuTermsAndConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuTermsAndConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
