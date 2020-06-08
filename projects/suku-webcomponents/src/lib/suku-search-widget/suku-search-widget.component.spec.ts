import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuSearchWidgetComponent } from './suku-search-widget.component';

describe('SukuSearchWidgetComponent', () => {
  let component: SukuSearchWidgetComponent;
  let fixture: ComponentFixture<SukuSearchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuSearchWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuSearchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
