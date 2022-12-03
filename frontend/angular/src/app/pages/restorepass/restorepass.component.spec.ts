import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorepassComponent } from './restorepass.component';

describe('RestorepassComponent', () => {
  let component: RestorepassComponent;
  let fixture: ComponentFixture<RestorepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorepassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestorepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
