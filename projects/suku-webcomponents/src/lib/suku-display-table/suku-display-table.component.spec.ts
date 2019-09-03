import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SukuDisplayTableComponent } from './suku-display-table.component';

describe('SukuDisplayTableComponent', () => {
  let component: SukuDisplayTableComponent;
  let fixture: ComponentFixture<SukuDisplayTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuDisplayTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuDisplayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
