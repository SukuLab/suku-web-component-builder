import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukuWysiwygEditorComponent } from './suku-wysiwyg-editor.component';

describe('SukuWysiwygEditorComponent', () => {
  let component: SukuWysiwygEditorComponent;
  let fixture: ComponentFixture<SukuWysiwygEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukuWysiwygEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukuWysiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
