import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuProfileHeaderComponent } from './suku-profile-header.component';

describe('SukuProfileHeaderComponent', () => {
  let component: SukuProfileHeaderComponent;
  let fixture: ComponentFixture<SukuProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
