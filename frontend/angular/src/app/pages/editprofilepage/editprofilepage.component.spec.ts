import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilepageComponent } from './editprofilepage.component';

describe('EditprofilepageComponent', () => {
  let component: EditprofilepageComponent;
  let fixture: ComponentFixture<EditprofilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
