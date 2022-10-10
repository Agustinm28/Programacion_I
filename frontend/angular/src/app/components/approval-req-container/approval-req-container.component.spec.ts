import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalReqContainerComponent } from './approval-req-container.component';

describe('ApprovalReqContainerComponent', () => {
  let component: ApprovalReqContainerComponent;
  let fixture: ComponentFixture<ApprovalReqContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalReqContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalReqContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
