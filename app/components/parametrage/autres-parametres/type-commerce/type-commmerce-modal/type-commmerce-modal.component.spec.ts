import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCommmerceModalComponent } from './type-commmerce-modal.component';

describe('TypeCommmerceModalComponent', () => {
  let component: TypeCommmerceModalComponent;
  let fixture: ComponentFixture<TypeCommmerceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCommmerceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCommmerceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
