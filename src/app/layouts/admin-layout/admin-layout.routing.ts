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
import { VaccinationComponent } from '../../pages/masters/vaccination/vaccination.component';
import { PrescriptionComponent } from '../../pages/patient/prescription/prescription.component';
import { AddPrescriptionComponent } from '../../pages/patient/addprescription/addprescription.component';
import { NewPrescriptionComponent } from '../../pages/patient/newprescription/newprescription.component';
import { VaccinationPatientComponent } from '../../pages/patient/vaccinationpatient/vaccinationpatient.component';
import{AuthGuard} from '../../components/api/auth.guard';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
    { path: 'user-profile', component: UserProfileComponent,canActivate:[AuthGuard] },
    { path: 'tables', component: TablesComponent,canActivate:[AuthGuard] },
    { path: 'masters', component: IconsComponent,canActivate:[AuthGuard] },
    { path: 'maps', component: MapsComponent,canActivate:[AuthGuard] },
    { path: 'users', component: UsersComponent,canActivate:[AuthGuard] },
    { path: 'specialization', component: SpecializationComponent,canActivate:[AuthGuard] },
    { path: 'diseases', component: DiseasesComponent,canActivate:[AuthGuard] },
    { path: 'diseases-stage', component: DiseasesStageComponent,canActivate:[AuthGuard] },
    { path: 'medicine', component: MedicineComponent,canActivate:[AuthGuard] },
    { path: 'patient', component: PatientComponent,canActivate:[AuthGuard] },
    {path:'addpatient',component:AddPatientComponent,canActivate:[AuthGuard]},
    {path:'vaccination',component:VaccinationComponent,canActivate:[AuthGuard]},
    {path:'prescription/:id',component:PrescriptionComponent,canActivate:[AuthGuard]},
    {path:'addprescription/:id',component:AddPrescriptionComponent,canActivate:[AuthGuard]},
    {path:'newprescription/:id',component:NewPrescriptionComponent,canActivate:[AuthGuard]},
    {path:'vaccinationpatient',component:VaccinationPatientComponent,canActivate:[AuthGuard]}
];
