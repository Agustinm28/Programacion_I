import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelModPruebaComponent } from './del-mod-prueba.component';


describe('DelModPruebaComponent', () => {
  let component: DelModPruebaComponent;
  let fixture: ComponentFixture<DelModPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelModPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelModPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
