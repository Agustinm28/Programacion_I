import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardGenericComponent } from './main-card-generic.component';

describe('MainCardGenericComponent', () => {
  let component: MainCardGenericComponent;
  let fixture: ComponentFixture<MainCardGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCardGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
