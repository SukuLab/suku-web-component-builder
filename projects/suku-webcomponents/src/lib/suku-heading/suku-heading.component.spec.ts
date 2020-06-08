import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHeadingComponent } from './suku-heading.component';

describe('SukuHeadingComponent', () => {
  let component: SukuHeadingComponent;
  let fixture: ComponentFixture<SukuHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
