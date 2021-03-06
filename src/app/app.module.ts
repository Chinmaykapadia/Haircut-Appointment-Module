import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAppointmentsComponent } from './new-appointments/new-appointments.component';

import { AddStatusComponent } from './add-status/add-status.component';
import { ControlsComponent } from './add-status-shared/controls/controls.component';
import { DisplayDataComponent } from './add-status-shared/display-data/display-data.component';
import { AddStatusSharedComponent } from './add-status-shared/add-status-shared.component';

import { NewAddStatusComponent } from './new-add-status/new-add-status.component';
import { DisplayComponent } from './new-add-status/display/display.component';
import { ActionsComponent } from './new-add-status/actions/actions.component';
import { DisplayListComponent } from './new-add-status/display-list/display-list.component';

import { StatusParentChildComponent } from './status-parent-child/status-parent-child.component';
import { FormComponent } from './status-parent-child/form/form.component';
import { DispFormDataComponent } from './status-parent-child/disp-form-data/disp-form-data.component';
@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    SideBarComponent,
    NewAppointmentsComponent,
    AddStatusComponent,
    ControlsComponent,
    DisplayDataComponent,
    AddStatusSharedComponent,
    NewAddStatusComponent,
    DisplayComponent,
    ActionsComponent,
    DisplayListComponent,
    StatusParentChildComponent,
    FormComponent,
    DispFormDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
