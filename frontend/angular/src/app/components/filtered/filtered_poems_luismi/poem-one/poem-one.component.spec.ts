import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemOneComponent } from './poem-one.component';

describe('PoemOneComponent', () => {
  let component: PoemOneComponent;
  let fixture: ComponentFixture<PoemOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
