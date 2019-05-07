import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuChatWidgetComponent } from './suku-chat-widget.component';

describe('SukuChatWidgetComponent', () => {
  let component: SukuChatWidgetComponent;
  let fixture: ComponentFixture<SukuChatWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuChatWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuChatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
