import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuInlineDropdownComponent } from './suku-inline-dropdown.component';

describe('SukuInlineDropdownComponent', () => {
  let component: SukuInlineDropdownComponent;
  let fixture: ComponentFixture<SukuInlineDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuInlineDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuInlineDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
