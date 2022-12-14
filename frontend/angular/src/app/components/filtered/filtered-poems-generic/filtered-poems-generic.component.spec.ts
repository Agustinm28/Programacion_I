import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPoemsGenericComponent } from './filtered-poems-generic.component';

describe('FilteredPoemsGenericComponent', () => {
  let component: FilteredPoemsGenericComponent;
  let fixture: ComponentFixture<FilteredPoemsGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredPoemsGenericComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredPoemsGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
