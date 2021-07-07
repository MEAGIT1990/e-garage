import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductionComponent } from './dashboard-production.component';

describe('DashboardProductionComponent', () => {
  let component: DashboardProductionComponent;
  let fixture: ComponentFixture<DashboardProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
