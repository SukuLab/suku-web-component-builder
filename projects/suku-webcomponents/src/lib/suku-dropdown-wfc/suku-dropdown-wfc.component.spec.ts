import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDropdownWfcComponent } from './suku-dropdown-wfc.component';

describe('SukuDropdownWfcComponent', () => {
  let component: SukuDropdownWfcComponent;
  let fixture: ComponentFixture<SukuDropdownWfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDropdownWfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDropdownWfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
