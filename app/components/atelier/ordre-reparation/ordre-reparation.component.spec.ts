import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreReparationComponent } from './ordre-reparation.component';

describe('OrdreReparationComponent', () => {
  let component: OrdreReparationComponent;
  let fixture: ComponentFixture<OrdreReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdreReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
