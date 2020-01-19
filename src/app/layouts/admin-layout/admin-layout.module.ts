import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/masters/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from '../../pages/masters/users/users.component';
import { SpecializationComponent } from '../../pages/masters/specialization/specialization.component';
import { DiseasesComponent } from '../../pages/masters/diseases/diseases.component';
import { DiseasesStageComponent } from '../../pages/masters/diseases-stage/diseases-stage.component';
import { MedicineComponent } from '../../pages/masters/medicine/medicine.component';
import { PatientComponent } from '../../pages/patient/patient.component';
import { AddPatientComponent } from '../../pages/patient/addpatient/addpatient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    SpecializationComponent,
    DiseasesComponent,
    DiseasesStageComponent,
    MedicineComponent,
    PatientComponent,
    AddPatientComponent
  ]
})

export class AdminLayoutModule { }
