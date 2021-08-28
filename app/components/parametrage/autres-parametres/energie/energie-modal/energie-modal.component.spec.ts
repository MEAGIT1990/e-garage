import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieModalComponent } from './energie-modal.component';

describe('EnergieModalComponent', () => {
  let component: EnergieModalComponent;
  let fixture: ComponentFixture<EnergieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergieModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
