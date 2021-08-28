import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementModalComponent } from './equipement-modal.component';

describe('EquipementModalComponent', () => {
  let component: EquipementModalComponent;
  let fixture: ComponentFixture<EquipementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
