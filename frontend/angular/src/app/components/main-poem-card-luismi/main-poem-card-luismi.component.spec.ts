import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoemCardLuismiComponent } from './main-poem-card-luismi.component';

describe('MainPoemCardLuismiComponent', () => {
  let component: MainPoemCardLuismiComponent;
  let fixture: ComponentFixture<MainPoemCardLuismiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPoemCardLuismiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPoemCardLuismiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
