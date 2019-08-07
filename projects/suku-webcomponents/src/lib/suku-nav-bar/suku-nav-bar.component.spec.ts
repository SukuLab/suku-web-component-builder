import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SukuNavBarComponent } from './suku-nav-bar.component';

describe('SukuNavBarComponent', () => {
  let component: SukuNavBarComponent;
  let fixture: ComponentFixture<SukuNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SukuNavBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
