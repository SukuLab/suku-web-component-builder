import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProductTraceWidgetComponent } from './suku-product-trace-widget.component';

describe('SukuProductTraceWidgetComponent', () => {
  let component: SukuProductTraceWidgetComponent;
  let fixture: ComponentFixture<SukuProductTraceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProductTraceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProductTraceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
