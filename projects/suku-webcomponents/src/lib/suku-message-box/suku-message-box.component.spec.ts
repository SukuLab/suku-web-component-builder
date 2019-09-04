import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuMessageBoxComponent } from './suku-message-box.component';

describe('SukuMessageBoxComponent', () => {
  let component: SukuMessageBoxComponent;
  let fixture: ComponentFixture<SukuMessageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuMessageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
