import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientanalysisComponent } from './patientanalysis.component';

describe('PatientanalysisComponent', () => {
  let component: PatientanalysisComponent;
  let fixture: ComponentFixture<PatientanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
