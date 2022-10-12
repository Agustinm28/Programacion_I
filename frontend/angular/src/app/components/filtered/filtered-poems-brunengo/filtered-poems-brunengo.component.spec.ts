import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPoemsBrunengoComponent } from './filtered-poems-brunengo.component';

describe('FilteredPoemsBrunengoComponent', () => {
  let component: FilteredPoemsBrunengoComponent;
  let fixture: ComponentFixture<FilteredPoemsBrunengoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredPoemsBrunengoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredPoemsBrunengoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
