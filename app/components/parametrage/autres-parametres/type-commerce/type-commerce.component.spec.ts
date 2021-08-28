import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCommerceComponent } from './type-commerce.component';

describe('TypeCommerceComponent', () => {
  let component: TypeCommerceComponent;
  let fixture: ComponentFixture<TypeCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
