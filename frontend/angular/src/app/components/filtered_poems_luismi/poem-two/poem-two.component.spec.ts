import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemTwoComponent } from './poem-two.component';

describe('PoemTwoComponent', () => {
  let component: PoemTwoComponent;
  let fixture: ComponentFixture<PoemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
