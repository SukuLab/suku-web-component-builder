import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuMessageWidgetComponent } from './suku-message-widget.component';

describe('SukuMessageWidgetComponent', () => {
  let component: SukuMessageWidgetComponent;
  let fixture: ComponentFixture<SukuMessageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuMessageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuMessageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
