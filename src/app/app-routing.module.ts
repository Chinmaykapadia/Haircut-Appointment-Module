import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from '../app/appointments/appointments.component';
import { SideBarComponent } from '../app/side-bar/side-bar.component';
import { NewAppointmentsComponent } from '../app/new-appointments/new-appointments.component';

import { AddStatusComponent } from '../app/add-status/add-status.component';
import { AddStatusSharedComponent } from '../app/add-status-shared/add-status-shared.component';
import { ControlsComponent } from '../app/add-status-shared/controls/controls.component';
import { DisplayDataComponent } from '../app/add-status-shared/display-data/display-data.component';
import { NewAddStatusComponent } from '../app/new-add-status/new-add-status.component';

import { ActionsComponent } from '../app/new-add-status/actions/actions.component';
import { DisplayComponent } from '../app/new-add-status/display/display.component';
import { DisplayListComponent } from '../app/new-add-status/display-list/display-list.component';

import { StatusParentChildComponent } from '../app/status-parent-child/status-parent-child.component';
import { FormComponent } from '../app/status-parent-child/form/form.component';
import { DispFormDataComponent } from '../app/status-parent-child/disp-form-data/disp-form-data.component';

const routes: Routes = [
  // { path: '', redirectTo: 'appointments', pathMatch: 'full' },
  { path: 'side-bar', component:SideBarComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'new-appointments', component: NewAppointmentsComponent },

  { path: 'add-status', component: AddStatusComponent },
  { path: 'add-status-shared', component: AddStatusSharedComponent },
  { path: 'controls', component: ControlsComponent },
  { path: 'display-data', component: DisplayDataComponent },

  { path: 'new-add-status', component: NewAddStatusComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'display-list', component: DisplayListComponent },

  // { path: 'status-parent-child', component: StatusParentChildComponent},
  // { path: 'form', component: FormComponent},
  // { path: 'disp-form-data', component: DispFormDataComponent},

  { path: 'status-parent-child', component: StatusParentChildComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'disp-form-data', component: DispFormDataComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
