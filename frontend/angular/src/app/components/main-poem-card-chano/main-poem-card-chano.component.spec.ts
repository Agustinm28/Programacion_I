import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoemCardChanoComponent } from './main-poem-card-chano.component';

describe('MainPoemCardChanoComponent', () => {
  let component: MainPoemCardChanoComponent;
  let fixture: ComponentFixture<MainPoemCardChanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPoemCardChanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPoemCardChanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
