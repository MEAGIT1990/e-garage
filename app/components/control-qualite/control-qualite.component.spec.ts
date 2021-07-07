import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlQualiteComponent } from './control-qualite.component';

describe('ControlQualiteComponent', () => {
  let component: ControlQualiteComponent;
  let fixture: ComponentFixture<ControlQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
