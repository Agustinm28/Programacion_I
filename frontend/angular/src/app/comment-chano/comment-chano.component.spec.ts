import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentChanoComponent } from './comment-chano.component';

describe('CommentChanoComponent', () => {
  let component: CommentChanoComponent;
  let fixture: ComponentFixture<CommentChanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentChanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentChanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
