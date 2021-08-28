import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnaliteModalComponent } from './fonctionnalite-modal.component';

describe('FonctionnaliteModalComponent', () => {
  let component: FonctionnaliteModalComponent;
  let fixture: ComponentFixture<FonctionnaliteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionnaliteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionnaliteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
