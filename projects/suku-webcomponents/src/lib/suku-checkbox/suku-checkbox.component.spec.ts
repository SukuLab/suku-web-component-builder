import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCheckboxComponent } from './suku-checkbox.component';

describe('SukuCheckboxComponent', () => {
  let component: SukuCheckboxComponent;
  let fixture: ComponentFixture<SukuCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
