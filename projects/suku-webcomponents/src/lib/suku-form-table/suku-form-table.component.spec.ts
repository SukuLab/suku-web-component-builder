import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuFormTableComponent } from './suku-form-table.component';

describe('SukuFormTableComponent', () => {
  let component: SukuFormTableComponent;
  let fixture: ComponentFixture<SukuFormTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuFormTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
