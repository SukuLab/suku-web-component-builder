import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuClaimsWidgetComponent } from './suku-claims-widget.component';

describe('SukuClaimsWidgetComponent', () => {
  let component: SukuClaimsWidgetComponent;
  let fixture: ComponentFixture<SukuClaimsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuClaimsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuClaimsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
