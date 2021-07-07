import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieVehiculeComponent } from './saisie-vehicule.component';

describe('SaisieVehiculeComponent', () => {
  let component: SaisieVehiculeComponent;
  let fixture: ComponentFixture<SaisieVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
