import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuLoginComponent } from './suku-login.component';

describe('SukuLoginComponent', () => {
  let component: SukuLoginComponent;
  let fixture: ComponentFixture<SukuLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
