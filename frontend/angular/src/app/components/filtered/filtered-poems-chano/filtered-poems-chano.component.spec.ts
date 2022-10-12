import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPoemsChanoComponent } from './filtered-poems-chano.component';

describe('FilteredPoemsChanoComponent', () => {
  let component: FilteredPoemsChanoComponent;
  let fixture: ComponentFixture<FilteredPoemsChanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredPoemsChanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredPoemsChanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
