import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from '../app/appointments/appointments.component';
import { SideBarComponent } from '../app/side-bar/side-bar.component';
import { NewAppointmentsComponent } from '../app/new-appointments/new-appointments.component';

const routes: Routes = [
  { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'side-bar', component:SideBarComponent},
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'new-appointments', component: NewAppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
