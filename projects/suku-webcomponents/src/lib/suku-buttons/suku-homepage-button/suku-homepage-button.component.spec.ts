import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHomepageButtonComponent } from './suku-homepage-button.component';

describe('SukuHomepageButtonComponent', () => {
  let component: SukuHomepageButtonComponent;
  let fixture: ComponentFixture<SukuHomepageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHomepageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHomepageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
