import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuAddLicenseModalComponent } from './suku-add-license-modal.component';

describe('SukuAddLicenseModalComponent', () => {
  let component: SukuAddLicenseModalComponent;
  let fixture: ComponentFixture<SukuAddLicenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuAddLicenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuAddLicenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
