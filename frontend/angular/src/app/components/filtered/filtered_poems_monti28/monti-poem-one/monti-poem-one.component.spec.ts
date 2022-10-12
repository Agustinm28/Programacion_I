import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontiPoemOneComponent } from './monti-poem-one.component';

describe('MontiPoemOneComponent', () => {
  let component: MontiPoemOneComponent;
  let fixture: ComponentFixture<MontiPoemOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontiPoemOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontiPoemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
