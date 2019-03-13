import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDwollaFundingSourceComponent } from './suku-dwolla-funding-source.component';

describe('SukuDwollaFundingSourceComponent', () => {
  let component: SukuDwollaFundingSourceComponent;
  let fixture: ComponentFixture<SukuDwollaFundingSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDwollaFundingSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDwollaFundingSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
