import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuMatchChipComponent } from './suku-match-chip.component';

describe('SukuMatchChipComponent', () => {
  let component: SukuMatchChipComponent;
  let fixture: ComponentFixture<SukuMatchChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuMatchChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuMatchChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
