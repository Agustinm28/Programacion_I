import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModContainerComponent } from './del-mod-container.component';

describe('DelModContainerComponent', () => {
  let component: DelModContainerComponent;
  let fixture: ComponentFixture<DelModContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
