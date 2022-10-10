import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLuismiComponent } from './comment-luismi.component';

describe('CommentLuismiComponent', () => {
  let component: CommentLuismiComponent;
  let fixture: ComponentFixture<CommentLuismiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentLuismiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentLuismiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
