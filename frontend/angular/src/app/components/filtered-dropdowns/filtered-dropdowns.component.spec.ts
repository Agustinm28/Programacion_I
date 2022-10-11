import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredDropdownsComponent } from './filtered-dropdowns.component';

describe('FilteredDropdownsComponent', () => {
  let component: FilteredDropdownsComponent;
  let fixture: ComponentFixture<FilteredDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredDropdownsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
