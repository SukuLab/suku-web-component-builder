import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDateTimePickerComponent } from './suku-date-time-picker.component';

describe('SukuDateTimePickerComponent', () => {
  let component: SukuDateTimePickerComponent;
  let fixture: ComponentFixture<SukuDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
