import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuACHSettingsComponent } from './suku-achsettings.component';

describe('SukuACHSettingsComponent', () => {
  let component: SukuACHSettingsComponent;
  let fixture: ComponentFixture<SukuACHSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuACHSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuACHSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
