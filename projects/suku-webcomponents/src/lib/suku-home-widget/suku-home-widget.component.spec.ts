import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHomeWidgetComponent } from './suku-home-widget.component';

describe('SukuHomeWidgetComponent', () => {
  let component: SukuHomeWidgetComponent;
  let fixture: ComponentFixture<SukuHomeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHomeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHomeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
