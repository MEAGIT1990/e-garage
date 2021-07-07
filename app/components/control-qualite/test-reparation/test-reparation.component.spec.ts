import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReparationComponent } from './test-reparation.component';

describe('TestReparationComponent', () => {
  let component: TestReparationComponent;
  let fixture: ComponentFixture<TestReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
