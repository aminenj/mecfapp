import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salle2Component } from './salle2.component';

describe('Salle2Component', () => {
  let component: Salle2Component;
  let fixture: ComponentFixture<Salle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Salle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Salle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
