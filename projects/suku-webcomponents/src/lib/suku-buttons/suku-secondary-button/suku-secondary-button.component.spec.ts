import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuSecondaryButtonComponent } from './suku-secondary-button.component';

describe('SukuSecondaryButtonComponent', () => {
  let component: SukuSecondaryButtonComponent;
  let fixture: ComponentFixture<SukuSecondaryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuSecondaryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuSecondaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
