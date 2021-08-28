import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetPersonnelModalComponent } from './effet-personnel-modal.component';

describe('EffetPersonnelModalComponent', () => {
  let component: EffetPersonnelModalComponent;
  let fixture: ComponentFixture<EffetPersonnelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffetPersonnelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffetPersonnelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
