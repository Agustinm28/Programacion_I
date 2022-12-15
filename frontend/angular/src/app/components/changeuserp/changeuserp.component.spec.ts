import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeuserpComponent } from './changeuserp.component';

describe('ChangeuserpComponent', () => {
  let component: ChangeuserpComponent;
  let fixture: ComponentFixture<ChangeuserpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeuserpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeuserpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
