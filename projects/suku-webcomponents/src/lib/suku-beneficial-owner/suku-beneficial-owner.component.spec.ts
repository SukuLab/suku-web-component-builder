import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuBeneficialOwnerComponent } from './suku-beneficial-owner.component';

describe('SukuBeneficialOwnerComponent', () => {
  let component: SukuBeneficialOwnerComponent;
  let fixture: ComponentFixture<SukuBeneficialOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuBeneficialOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuBeneficialOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
