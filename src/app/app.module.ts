import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAppointmentsComponent } from './new-appointments/new-appointments.component';
import { AddStatusComponent } from './add-status/add-status.component';
@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    SideBarComponent,
    NewAppointmentsComponent,
    AddStatusComponent
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
