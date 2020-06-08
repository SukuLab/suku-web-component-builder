import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuAddIconComponent } from './suku-add-icon.component';

describe('SukuAddIconComponent', () => {
  let component: SukuAddIconComponent;
  let fixture: ComponentFixture<SukuAddIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuAddIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuAddIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
