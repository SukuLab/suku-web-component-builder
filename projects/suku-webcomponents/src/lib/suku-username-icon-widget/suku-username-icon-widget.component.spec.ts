import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuUsernameIconWidgetComponent } from './suku-username-icon-widget.component';

describe('SukuUsernameIconWidgetComponent', () => {
  let component: SukuUsernameIconWidgetComponent;
  let fixture: ComponentFixture<SukuUsernameIconWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuUsernameIconWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuUsernameIconWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
