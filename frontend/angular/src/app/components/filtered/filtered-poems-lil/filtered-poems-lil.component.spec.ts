import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPoemsLilComponent } from './filtered-poems-lil.component';

describe('FilteredPoemsLilComponent', () => {
  let component: FilteredPoemsLilComponent;
  let fixture: ComponentFixture<FilteredPoemsLilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredPoemsLilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredPoemsLilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
