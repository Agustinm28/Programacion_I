import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModBrunengoComponent } from './del-mod-brunengo.component';

describe('DelModBrunengoComponent', () => {
  let component: DelModBrunengoComponent;
  let fixture: ComponentFixture<DelModBrunengoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModBrunengoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModBrunengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
