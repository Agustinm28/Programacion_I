import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeuserpassComponent } from './changeuserpass.component';

describe('ChangeuserpassComponent', () => {
  let component: ChangeuserpassComponent;
  let fixture: ComponentFixture<ChangeuserpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeuserpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeuserpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
