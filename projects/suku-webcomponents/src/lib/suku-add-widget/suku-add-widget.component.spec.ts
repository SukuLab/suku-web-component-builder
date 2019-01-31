import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuAddWidgetComponent } from './suku-add-widget.component';

describe('SukuAddWidgetComponent', () => {
  let component: SukuAddWidgetComponent;
  let fixture: ComponentFixture<SukuAddWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuAddWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuAddWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
