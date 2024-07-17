import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviHorairesComponent } from './suivi-horaires.component';

describe('SuiviHorairesComponent', () => {
  let component: SuiviHorairesComponent;
  let fixture: ComponentFixture<SuiviHorairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviHorairesComponent]
    });
    fixture = TestBed.createComponent(SuiviHorairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
