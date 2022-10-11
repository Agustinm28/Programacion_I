import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrModifyComponent } from './delete-or-modify.component';

describe('DeleteOrModifyComponent', () => {
  let component: DeleteOrModifyComponent;
  let fixture: ComponentFixture<DeleteOrModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOrModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOrModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
