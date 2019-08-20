import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuChipListComponent } from './suku-chip-list.component';

describe('SukuChipListComponent', () => {
  let component: SukuChipListComponent;
  let fixture: ComponentFixture<SukuChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
