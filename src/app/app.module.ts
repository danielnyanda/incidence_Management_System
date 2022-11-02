import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/pages/login/login.component';
import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.component';
import { NavigatorComponent } from './components/pages/navigator/navigator.component';
import { UpdatesComponent } from './components/partials/updates/updates.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { NgChartsModule } from 'ng2-charts';
import { UsersComponent } from './components/pages/users/users.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { OperationsComponent } from './components/pages/operations/operations.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { AllUsersComponent } from './components/partials/users/all-users/all-users.component';
import { StaffUserComponent } from './components/partials/users/staff-user/staff-user.component';
import { CustomerUserComponent } from './components/partials/users/customer-user/customer-user.component';
import { AddUserComponent } from './components/partials/users/add-user/add-user.component';
import { AllEnquiriesComponent } from './components/partials/enquiries/all-enquiries/all-enquiries.component';
import { PendingEnquiriesComponent } from './components/partials/enquiries/pending-enquiries/pending-enquiries.component';
import { ClosedEnquiriesComponent } from './components/partials/enquiries/closed-enquiries/closed-enquiries.component';
import { CancelledEnquiriesComponent } from './components/partials/enquiries/cancelled-enquiries/cancelled-enquiries.component';
import { ApprovedEnquiriesComponent } from './components/partials/enquiries/approved-enquiries/approved-enquiries.component';
import { NewEnquiriesComponent } from './components/partials/enquiries/new-enquiries/new-enquiries.component';
import { ApproveComponent } from './components/partials/modals/approve/approve.component';
import { ScheduleEnquiryComponent } from './components/partials/enquiries/schedule-enquiry/schedule-enquiry.component';
import { ApproveAssignedComponent } from './components/partials/modals/approve-assigned/approve-assigned.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    NavigatorComponent,
    UpdatesComponent,
    HeaderComponent,
    SideMenuComponent,
    UsersComponent,
    ReportsComponent,
    OperationsComponent,
    SettingsComponent,
    AllUsersComponent,
    StaffUserComponent,
    CustomerUserComponent,
    AddUserComponent,
    AllEnquiriesComponent,
    PendingEnquiriesComponent,
    ClosedEnquiriesComponent,
    CancelledEnquiriesComponent,
    ApprovedEnquiriesComponent,
    NewEnquiriesComponent,
    ApproveComponent,
    ScheduleEnquiryComponent,
    ApproveAssignedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgChartsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AddUserComponent,
    NewEnquiriesComponent,
    ApproveComponent,
    ApproveAssignedComponent
  ]
})
export class AppModule { }
