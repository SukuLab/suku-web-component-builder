import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuSubHeadingComponent } from './suku-sub-heading.component';

describe('SukuSubHeadingComponent', () => {
  let component: SukuSubHeadingComponent;
  let fixture: ComponentFixture<SukuSubHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuSubHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuSubHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
