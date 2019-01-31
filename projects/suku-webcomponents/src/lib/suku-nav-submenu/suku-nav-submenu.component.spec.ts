import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuNavSubmenuComponent } from './suku-nav-submenu.component';

describe('SukuNavSubmenuComponent', () => {
  let component: SukuNavSubmenuComponent;
  let fixture: ComponentFixture<SukuNavSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuNavSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuNavSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
