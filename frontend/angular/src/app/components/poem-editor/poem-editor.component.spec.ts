import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemEditorComponent } from './poem-editor.component';

describe('PoemEditorComponent', () => {
  let component: PoemEditorComponent;
  let fixture: ComponentFixture<PoemEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
