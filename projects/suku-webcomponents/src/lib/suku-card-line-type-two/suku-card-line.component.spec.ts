import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCardLineTypeTwoComponent } from './suku-card-line.component';

describe('SukuCardLineTypeTwoComponent', () => {
  let component: SukuCardLineTypeTwoComponent;
  let fixture: ComponentFixture<SukuCardLineTypeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCardLineTypeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCardLineTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
