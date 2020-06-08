import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuRadioButtonComponent } from './suku-radio-button.component';

describe('SukuRadioButtonComponent', () => {
  let component: SukuRadioButtonComponent;
  let fixture: ComponentFixture<SukuRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
