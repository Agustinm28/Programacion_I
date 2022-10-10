import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAdminNavbarComponent } from './not-admin-navbar.component';

describe('NotAdminNavbarComponent', () => {
  let component: NotAdminNavbarComponent;
  let fixture: ComponentFixture<NotAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAdminNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
