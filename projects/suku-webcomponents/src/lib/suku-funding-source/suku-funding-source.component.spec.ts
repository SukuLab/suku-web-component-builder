import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuFundingSourceComponent } from './suku-funding-source.component';

describe('SukuFundingSourceComponent', () => {
  let component: SukuFundingSourceComponent;
  let fixture: ComponentFixture<SukuFundingSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuFundingSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuFundingSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
