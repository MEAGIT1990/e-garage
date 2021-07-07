import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionFactureComponent } from './edition-facture.component';

describe('EditionFactureComponent', () => {
  let component: EditionFactureComponent;
  let fixture: ComponentFixture<EditionFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
