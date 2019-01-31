import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuFiltersComponent } from './suku-filters.component';

describe('SukuFiltersComponent', () => {
  let component: SukuFiltersComponent;
  let fixture: ComponentFixture<SukuFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
