import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCardLineTypeOneComponent } from './suku-card-line.component';

describe('SukuCardLineComponent', () => {
  let component: SukuCardLineTypeOneComponent;
  let fixture: ComponentFixture<SukuCardLineTypeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCardLineTypeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCardLineTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
