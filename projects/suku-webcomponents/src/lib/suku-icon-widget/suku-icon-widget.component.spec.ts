import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuIconWidgetComponent } from './suku-icon-widget.component';

describe('SukuIconWidgetComponent', () => {
  let component: SukuIconWidgetComponent;
  let fixture: ComponentFixture<SukuIconWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuIconWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuIconWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
