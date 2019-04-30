import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuTitleHeaderComponent } from './suku-title-header.component';

describe('SukuTitleHeaderComponent', () => {
  let component: SukuTitleHeaderComponent;
  let fixture: ComponentFixture<SukuTitleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuTitleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuTitleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
