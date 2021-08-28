import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresParametresComponent } from './autres-parametres.component';

describe('AutresParametresComponent', () => {
  let component: AutresParametresComponent;
  let fixture: ComponentFixture<AutresParametresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutresParametresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutresParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
