import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuUserDetailsComponent } from './suku-user-details.component';

describe('SukuUserDetailsComponent', () => {
  let component: SukuUserDetailsComponent;
  let fixture: ComponentFixture<SukuUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
