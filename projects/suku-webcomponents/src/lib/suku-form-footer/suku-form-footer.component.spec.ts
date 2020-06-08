import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuFormFooterComponent } from './suku-form-footer.component';

describe('SukuFormFooterComponent', () => {
  let component: SukuFormFooterComponent;
  let fixture: ComponentFixture<SukuFormFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuFormFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuFormFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
