import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepComponent } from './changep.component';

describe('ChangepComponent', () => {
  let component: ChangepComponent;
  let fixture: ComponentFixture<ChangepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
