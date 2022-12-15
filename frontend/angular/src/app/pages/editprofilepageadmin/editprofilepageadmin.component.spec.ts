import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilepageadminComponent } from './editprofilepageadmin.component';

describe('EditprofilepageadminComponent', () => {
  let component: EditprofilepageadminComponent;
  let fixture: ComponentFixture<EditprofilepageadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilepageadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilepageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
