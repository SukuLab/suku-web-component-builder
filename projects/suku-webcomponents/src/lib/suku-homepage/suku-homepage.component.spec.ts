import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHomepageComponent } from './suku-homepage.component';

describe('SukuHomepageComponent', () => {
  let component: SukuHomepageComponent;
  let fixture: ComponentFixture<SukuHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
