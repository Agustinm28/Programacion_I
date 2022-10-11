import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnregisteredComponent } from './home-unregistered.component';

describe('HomeUnregisteredComponent', () => {
  let component: HomeUnregisteredComponent;
  let fixture: ComponentFixture<HomeUnregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUnregisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUnregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
