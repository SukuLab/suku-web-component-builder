import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuNotificationWidgetComponent } from './suku-notification-widget.component';

describe('SukuNotificationWidgetComponent', () => {
  let component: SukuNotificationWidgetComponent;
  let fixture: ComponentFixture<SukuNotificationWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuNotificationWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuNotificationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
