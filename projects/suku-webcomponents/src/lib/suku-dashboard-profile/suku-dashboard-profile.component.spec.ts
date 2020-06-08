import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDashboardProfileComponent } from './suku-dashboard-profile.component';

describe('SukuDashboardProfileComponent', () => {
  let component: SukuDashboardProfileComponent;
  let fixture: ComponentFixture<SukuDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
