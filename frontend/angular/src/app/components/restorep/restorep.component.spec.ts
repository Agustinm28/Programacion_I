import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorepComponent } from './restorep.component';

describe('RestorepComponent', () => {
  let component: RestorepComponent;
  let fixture: ComponentFixture<RestorepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestorepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
