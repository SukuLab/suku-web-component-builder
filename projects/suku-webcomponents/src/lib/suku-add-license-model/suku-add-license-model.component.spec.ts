import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuAddLicenseModelComponent } from './suku-add-license-model.component';

describe('SukuAddLicenseModelComponent', () => {
  let component: SukuAddLicenseModelComponent;
  let fixture: ComponentFixture<SukuAddLicenseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuAddLicenseModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuAddLicenseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
