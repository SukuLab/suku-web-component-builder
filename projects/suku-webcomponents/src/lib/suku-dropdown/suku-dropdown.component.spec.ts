import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDropdownComponent } from './suku-dropdown.component';

describe('SukuDropdownComponent', () => {
  let component: SukuDropdownComponent;
  let fixture: ComponentFixture<SukuDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
