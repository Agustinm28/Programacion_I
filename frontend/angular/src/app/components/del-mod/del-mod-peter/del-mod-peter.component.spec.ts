import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModPeterComponent } from './del-mod-peter.component';

describe('DelModPeterComponent', () => {
  let component: DelModPeterComponent;
  let fixture: ComponentFixture<DelModPeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModPeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
