import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuPrimaryButtonComponent } from './suku-primary-button.component';

describe('SukuPrimaryButtonComponent', () => {
  let component: SukuPrimaryButtonComponent;
  let fixture: ComponentFixture<SukuPrimaryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuPrimaryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
