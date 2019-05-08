import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuConfirmationComponent } from './suku-confirmation.component';

describe('SukuConfirmationComponent', () => {
  let component: SukuConfirmationComponent;
  let fixture: ComponentFixture<SukuConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SukuConfirmationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
