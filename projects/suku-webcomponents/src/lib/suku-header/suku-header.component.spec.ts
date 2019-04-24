import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHeaderComponent } from './suku-header.component';

describe('SukuHeaderComponent', () => {
  let component: SukuHeaderComponent;
  let fixture: ComponentFixture<SukuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
