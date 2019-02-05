import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuResponseComponent } from './suku-response.component';

describe('SukuResponseComponent', () => {
  let component: SukuResponseComponent;
  let fixture: ComponentFixture<SukuResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
