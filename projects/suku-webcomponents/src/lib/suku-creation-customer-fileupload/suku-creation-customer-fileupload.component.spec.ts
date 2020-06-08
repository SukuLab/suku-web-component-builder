import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCreationCustomerFileuploadComponent } from './suku-creation-customer-fileupload.component';

describe('SukuCreationCustomerFileuploadComponent', () => {
  let component: SukuCreationCustomerFileuploadComponent;
  let fixture: ComponentFixture<SukuCreationCustomerFileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCreationCustomerFileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCreationCustomerFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
