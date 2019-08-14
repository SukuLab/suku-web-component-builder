import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuConfirmationModelComponent } from './suku-confirmation-model.component';

describe('SukuConfirmationModelComponent', () => {
  let component: SukuConfirmationModelComponent;
  let fixture: ComponentFixture<SukuConfirmationModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuConfirmationModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuConfirmationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
