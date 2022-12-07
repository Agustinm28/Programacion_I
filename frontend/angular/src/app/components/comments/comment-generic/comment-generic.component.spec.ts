import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentGenericComponent } from './comment-generic.component';

describe('CommentGenericComponent', () => {
  let component: CommentGenericComponent;
  let fixture: ComponentFixture<CommentGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
