import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuImageWidgetComponent } from './suku-image-widget.component';

describe('SukuImageWidgetComponent', () => {
  let component: SukuImageWidgetComponent;
  let fixture: ComponentFixture<SukuImageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuImageWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuImageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
