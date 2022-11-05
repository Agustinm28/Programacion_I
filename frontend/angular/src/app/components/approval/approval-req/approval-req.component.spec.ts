import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalReqComponent } from './approval-req.component';

describe('ApprovalReqComponent', () => {
  let component: ApprovalReqComponent;
  let fixture: ComponentFixture<ApprovalReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
