import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCardLineComponent } from './suku-card-line.component';

describe('SukuCardLineComponent', () => {
  let component: SukuCardLineComponent;
  let fixture: ComponentFixture<SukuCardLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCardLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCardLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
