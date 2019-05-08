import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuLoaderComponent } from './suku-loader.component';

describe('SukuLoaderComponent', () => {
  let component: SukuLoaderComponent;
  let fixture: ComponentFixture<SukuLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
