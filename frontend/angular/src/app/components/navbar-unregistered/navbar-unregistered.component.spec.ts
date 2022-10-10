import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUnregisteredComponent } from './navbar-unregistered.component';

describe('NavbarUnregisteredComponent', () => {
  let component: NavbarUnregisteredComponent;
  let fixture: ComponentFixture<NavbarUnregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUnregisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarUnregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
