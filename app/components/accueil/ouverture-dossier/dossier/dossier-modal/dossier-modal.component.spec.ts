import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierModalComponent } from './dossier-modal.component';

describe('DossierModalComponent', () => {
  let component: DossierModalComponent;
  let fixture: ComponentFixture<DossierModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
