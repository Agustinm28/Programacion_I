import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegUserComponent } from './home-reg-user.component';

describe('HomeRegUserComponent', () => {
  let component: HomeRegUserComponent;
  let fixture: ComponentFixture<HomeRegUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRegUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
