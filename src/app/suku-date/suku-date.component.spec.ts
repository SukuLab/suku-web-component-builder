import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuDateComponent } from './suku-date.component';

describe('SukuDateComponent', () => {
  let component: SukuDateComponent;
  let fixture: ComponentFixture<SukuDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
