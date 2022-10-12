import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModLuismiComponent } from './del-mod-luismi.component';

describe('DelModLuismiComponent', () => {
  let component: DelModLuismiComponent;
  let fixture: ComponentFixture<DelModLuismiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModLuismiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModLuismiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
