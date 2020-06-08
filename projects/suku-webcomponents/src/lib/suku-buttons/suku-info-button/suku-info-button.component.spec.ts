import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuInfoButtonComponent } from './suku-info-button.component';

describe('SukuInfoButtonComponent', () => {
  let component: SukuInfoButtonComponent;
  let fixture: ComponentFixture<SukuInfoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuInfoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuInfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
