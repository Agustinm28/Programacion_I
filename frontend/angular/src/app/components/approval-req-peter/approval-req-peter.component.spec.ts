import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalReqPeterComponent } from './approval-req-peter.component';

describe('ApprovalReqPeterComponent', () => {
  let component: ApprovalReqPeterComponent;
  let fixture: ComponentFixture<ApprovalReqPeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalReqPeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalReqPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
