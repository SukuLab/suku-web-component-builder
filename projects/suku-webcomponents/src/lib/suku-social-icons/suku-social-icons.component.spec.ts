import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuSocialIconsComponent } from './suku-social-icons.component';

describe('SukuSocialIconsComponent', () => {
  let component: SukuSocialIconsComponent;
  let fixture: ComponentFixture<SukuSocialIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuSocialIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuSocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
