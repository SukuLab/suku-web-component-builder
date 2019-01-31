import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuSearchInputComponent } from './suku-search-input.component';

describe('SukuSearchInputComponent', () => {
  let component: SukuSearchInputComponent;
  let fixture: ComponentFixture<SukuSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
