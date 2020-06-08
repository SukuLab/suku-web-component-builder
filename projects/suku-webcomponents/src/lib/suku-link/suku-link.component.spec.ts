import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuLinkComponent } from './suku-link.component';

describe('SukuLinkComponent', () => {
  let component: SukuLinkComponent;
  let fixture: ComponentFixture<SukuLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
