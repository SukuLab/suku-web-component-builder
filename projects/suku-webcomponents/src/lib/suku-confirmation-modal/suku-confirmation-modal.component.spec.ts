import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuConfirmationModalComponent } from './suku-confirmation-modal.component';

describe('SukuConfirmationModalComponent', () => {
  let component: SukuConfirmationModalComponent;
  let fixture: ComponentFixture<SukuConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SukuConfirmationModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
