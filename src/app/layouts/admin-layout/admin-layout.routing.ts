import { Routes } from '@angular/router';

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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'masters', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'specialization', component: SpecializationComponent },
    { path: 'diseases', component: DiseasesComponent },
    { path: 'diseases-stage', component: DiseasesStageComponent },
    { path: 'medicine', component: MedicineComponent },
    { path: 'patient', component: PatientComponent },
    {path:'addpatient',component:AddPatientComponent}
];
