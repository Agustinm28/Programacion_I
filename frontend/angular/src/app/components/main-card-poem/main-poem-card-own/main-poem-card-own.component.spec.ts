import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoemCardOwnComponent } from './main-poem-card-own.component';

describe('MainPoemCardOwnComponent', () => {
  let component: MainPoemCardOwnComponent;
  let fixture: ComponentFixture<MainPoemCardOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPoemCardOwnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPoemCardOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
