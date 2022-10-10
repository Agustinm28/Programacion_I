import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModMontiComponent } from './del-mod-monti.component';

describe('DelModMontiComponent', () => {
  let component: DelModMontiComponent;
  let fixture: ComponentFixture<DelModMontiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModMontiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModMontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
