import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukAuthTableComponent } from './suk-auth-table.component';

describe('SukAuthTableComponent', () => {
  let component: SukAuthTableComponent;
  let fixture: ComponentFixture<SukAuthTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukAuthTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukAuthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
