import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDefaultButtonComponent } from './suku-default-button.component';

describe('SukuDefaultButtonComponent', () => {
  let component: SukuDefaultButtonComponent;
  let fixture: ComponentFixture<SukuDefaultButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDefaultButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDefaultButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
