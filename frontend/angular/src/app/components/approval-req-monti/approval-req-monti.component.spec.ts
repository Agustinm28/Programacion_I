import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalReqMontiComponent } from './approval-req-monti.component';

describe('ApprovalReqMontiComponent', () => {
  let component: ApprovalReqMontiComponent;
  let fixture: ComponentFixture<ApprovalReqMontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalReqMontiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalReqMontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
