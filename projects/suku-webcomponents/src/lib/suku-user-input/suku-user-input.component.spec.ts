import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuUserInputComponent } from './suku-user-input.component';

describe('SukuUserInputComponent', () => {
  let component: SukuUserInputComponent;
  let fixture: ComponentFixture<SukuUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
