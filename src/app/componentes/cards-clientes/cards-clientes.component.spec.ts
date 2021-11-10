import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsClientesComponent } from './cards-clientes.component';

describe('CardsClientesComponent', () => {
  let component: CardsClientesComponent;
  let fixture: ComponentFixture<CardsClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
