import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHomeItalicHeadingComponent } from './suku-home-italic-heading.component';

describe('SukuHomeItalicHeadingComponent', () => {
  let component: SukuHomeItalicHeadingComponent;
  let fixture: ComponentFixture<SukuHomeItalicHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHomeItalicHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHomeItalicHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
