import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationPatientComponent } from './vaccinationpatient.component';

describe('TablesComponent', () => {
  let component: VaccinationPatientComponent;
  let fixture: ComponentFixture<VaccinationPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
