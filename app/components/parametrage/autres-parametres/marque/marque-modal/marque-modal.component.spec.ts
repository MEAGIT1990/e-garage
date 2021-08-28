import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueModalComponent } from './marque-modal.component';

describe('MarqueModalComponent', () => {
  let component: MarqueModalComponent;
  let fixture: ComponentFixture<MarqueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
