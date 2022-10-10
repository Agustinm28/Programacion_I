import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoemCardHenryComponent } from './main-poem-card-henry.component';

describe('MainPoemCardHenryComponent', () => {
  let component: MainPoemCardHenryComponent;
  let fixture: ComponentFixture<MainPoemCardHenryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPoemCardHenryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPoemCardHenryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
