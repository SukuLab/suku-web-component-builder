import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuCardTitleComponent } from './suku-card-title.component';

describe('SukuCardTitleComponent', () => {
  let component: SukuCardTitleComponent;
  let fixture: ComponentFixture<SukuCardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuCardTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
