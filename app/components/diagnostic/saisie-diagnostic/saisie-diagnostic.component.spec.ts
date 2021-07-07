import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDiagnosticComponent } from './saisie-diagnostic.component';

describe('SaisieDiagnosticComponent', () => {
  let component: SaisieDiagnosticComponent;
  let fixture: ComponentFixture<SaisieDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
