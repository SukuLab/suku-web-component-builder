import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuTransactionHistoryComponent } from './suku-transaction-history.component';

describe('SukuTransactionHistoryComponent', () => {
  let component: SukuTransactionHistoryComponent;
  let fixture: ComponentFixture<SukuTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
