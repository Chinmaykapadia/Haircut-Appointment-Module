import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from '../app/appointments/appointments.component';
import { SideBarComponent } from '../app/side-bar/side-bar.component';
import { NewAppointmentsComponent } from '../app/new-appointments/new-appointments.component';
import { AddStatusComponent } from '../app/add-status/add-status.component';

const routes: Routes = [
  // { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'side-bar', component:SideBarComponent},
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'new-appointments', component: NewAppointmentsComponent },
  { path: 'add-status', component: AddStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
