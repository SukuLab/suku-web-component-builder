import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuSelectInputComponent } from './suku-select-input.component';

describe('SukuSelectInputComponent', () => {
  let component: SukuSelectInputComponent;
  let fixture: ComponentFixture<SukuSelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuSelectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
