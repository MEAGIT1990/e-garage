import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurModalComponent } from './couleur-modal.component';

describe('CouleurModalComponent', () => {
  let component: CouleurModalComponent;
  let fixture: ComponentFixture<CouleurModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouleurModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouleurModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
