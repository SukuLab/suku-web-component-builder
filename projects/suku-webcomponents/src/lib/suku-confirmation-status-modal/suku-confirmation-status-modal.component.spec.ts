import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuConfirmationStatusModalComponent } from './suku-confirmation-status-modal.component';

describe('SukuConfirmationStatusModalComponent', () => {
  let component: SukuConfirmationStatusModalComponent;
  let fixture: ComponentFixture<SukuConfirmationStatusModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuConfirmationStatusModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuConfirmationStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
