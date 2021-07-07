import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvertureDossierComponent } from './ouverture-dossier.component';

describe('OuvertureDossierComponent', () => {
  let component: OuvertureDossierComponent;
  let fixture: ComponentFixture<OuvertureDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvertureDossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvertureDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
