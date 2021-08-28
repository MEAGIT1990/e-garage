import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetPersonelComponent } from './effet-personel.component';

describe('EffetPersonelComponent', () => {
  let component: EffetPersonelComponent;
  let fixture: ComponentFixture<EffetPersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffetPersonelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffetPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
