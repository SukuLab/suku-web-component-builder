import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProfileWidgetComponent } from './suku-profile-widget.component';

describe('SukuProfileWidgetComponent', () => {
  let component: SukuProfileWidgetComponent;
  let fixture: ComponentFixture<SukuProfileWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProfileWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
