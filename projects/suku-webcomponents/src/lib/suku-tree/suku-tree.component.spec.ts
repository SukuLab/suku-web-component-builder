import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuTreeComponent } from './suku-tree.component';

describe('SukuTreeComponent', () => {
  let component: SukuTreeComponent;
  let fixture: ComponentFixture<SukuTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
