import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuHomepageSectionComponent } from './suku-homepage-section.component';

describe('SukuHomepageSectionComponent', () => {
  let component: SukuHomepageSectionComponent;
  let fixture: ComponentFixture<SukuHomepageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuHomepageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuHomepageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
