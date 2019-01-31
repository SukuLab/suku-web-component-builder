import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuMailWidgetComponent } from './suku-mail-widget.component';

describe('SukuMailWidgetComponent', () => {
  let component: SukuMailWidgetComponent;
  let fixture: ComponentFixture<SukuMailWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuMailWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuMailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
