import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuPhoneWidgetComponent } from './suku-phone-widget.component';

describe('SukuPhoneWidgetComponent', () => {
  let component: SukuPhoneWidgetComponent;
  let fixture: ComponentFixture<SukuPhoneWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuPhoneWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuPhoneWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
