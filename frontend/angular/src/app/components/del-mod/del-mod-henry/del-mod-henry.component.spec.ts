import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModHenryComponent } from './del-mod-henry.component';

describe('DelModHenryComponent', () => {
  let component: DelModHenryComponent;
  let fixture: ComponentFixture<DelModHenryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModHenryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModHenryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
