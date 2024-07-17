import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviRefComponent } from './suivi-ref.component';

describe('SuiviRefComponent', () => {
  let component: SuiviRefComponent;
  let fixture: ComponentFixture<SuiviRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviRefComponent]
    });
    fixture = TestBed.createComponent(SuiviRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
