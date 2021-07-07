import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFinancierComponent } from './dashboard-financier.component';

describe('DashboardFinancierComponent', () => {
  let component: DashboardFinancierComponent;
  let fixture: ComponentFixture<DashboardFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
