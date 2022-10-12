import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalReqHenryComponent } from './approval-req-henry.component';

describe('ApprovalReqHenryComponent', () => {
  let component: ApprovalReqHenryComponent;
  let fixture: ComponentFixture<ApprovalReqHenryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalReqHenryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalReqHenryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
