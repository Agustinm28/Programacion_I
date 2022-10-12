import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPoemsHenryCComponent } from './filtered-poems-henry-c.component';

describe('FilteredPoemsHenryCComponent', () => {
  let component: FilteredPoemsHenryCComponent;
  let fixture: ComponentFixture<FilteredPoemsHenryCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredPoemsHenryCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredPoemsHenryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
