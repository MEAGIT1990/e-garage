import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieVehiculeModalComponent } from './saisie-vehicule-modal.component';

describe('SaisieVehiculeModalComponent', () => {
  let component: SaisieVehiculeModalComponent;
  let fixture: ComponentFixture<SaisieVehiculeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieVehiculeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieVehiculeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
