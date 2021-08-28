import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeClientModalComponent } from './type-client-modal.component';

describe('TypeClientModalComponent', () => {
  let component: TypeClientModalComponent;
  let fixture: ComponentFixture<TypeClientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeClientModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
