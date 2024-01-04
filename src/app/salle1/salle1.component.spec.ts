import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salle1Component } from './salle1.component';

describe('Salle1Component', () => {
  let component: Salle1Component;
  let fixture: ComponentFixture<Salle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Salle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Salle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
