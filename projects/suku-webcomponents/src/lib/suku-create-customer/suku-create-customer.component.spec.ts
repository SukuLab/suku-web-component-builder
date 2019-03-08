import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCreateCustomerComponent } from './suku-create-customer.component';

describe('SukuCreateCustomerComponent', () => {
  let component: SukuCreateCustomerComponent;
  let fixture: ComponentFixture<SukuCreateCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCreateCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
