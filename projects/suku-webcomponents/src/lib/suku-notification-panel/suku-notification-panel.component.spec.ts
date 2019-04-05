import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuNotificationPanelComponent } from './suku-notification-panel.component';

describe('SukuNotificationPanelComponent', () => {
  let component: SukuNotificationPanelComponent;
  let fixture: ComponentFixture<SukuNotificationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuNotificationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuNotificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
