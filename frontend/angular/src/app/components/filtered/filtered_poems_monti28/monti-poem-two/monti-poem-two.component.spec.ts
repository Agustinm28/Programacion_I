import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontiPoemTwoComponent } from './monti-poem-two.component';

describe('MontiPoemTwoComponent', () => {
  let component: MontiPoemTwoComponent;
  let fixture: ComponentFixture<MontiPoemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontiPoemTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontiPoemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
