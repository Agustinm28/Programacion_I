import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModChanoComponent } from './del-mod-chano.component';

describe('DelModChanoComponent', () => {
  let component: DelModChanoComponent;
  let fixture: ComponentFixture<DelModChanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModChanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModChanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
