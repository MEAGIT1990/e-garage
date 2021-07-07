import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementAccompteComponent } from './reglement-accompte.component';

describe('ReglementAccompteComponent', () => {
  let component: ReglementAccompteComponent;
  let fixture: ComponentFixture<ReglementAccompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementAccompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementAccompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
