import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoemCardNotloggedComponent } from './main-poem-card-notlogged.component';

describe('MainPoemCardNotloggedComponent', () => {
  let component: MainPoemCardNotloggedComponent;
  let fixture: ComponentFixture<MainPoemCardNotloggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPoemCardNotloggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPoemCardNotloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
