import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponentComponent } from './main_dashboard/admin_finished/main-component/main-component.component';
import { TopbarComponent } from './dashboard_components/admin_dashboard_components/topbar/topbar.component';
import { SidebarComponent } from './dashboard_components/admin_dashboard_components/sidebar/sidebar.component';
import { StdBioTblComponent } from './dashboard_components/admin_dashboard_components/main_contents/std-bio-tbl/std-bio-tbl.component';
import { SuperFirstPageComponent } from './super-first-page/super-first-page.component';
import { StudentSideBarComponent } from './dashboard_components/super_admin_components/side_bar/student-side-bar/student-side-bar.component';
import { BioViewComponent } from './dashboard_components/super_admin_components/main_content/students/bio-view/bio-view.component';
import { SAdminDashboardComponent } from './main_dashboard/super_admin_finished/s-admin-dashboard/s-admin-dashboard.component';
import { ClassViewComponent } from './dashboard_components/super_admin_components/main_content/students/class-view/class-view.component';
import { MarksViewComponent } from './dashboard_components/super_admin_components/main_content/students/marks-view/marks-view.component';
import { AttendenceViewComponent } from './dashboard_components/super_admin_components/main_content/students/attendence-view/attendence-view.component';
import { TAttendenceViewComponent } from './dashboard_components/super_admin_components/main_content/teachers/t-attendence-view/t-attendence-view.component';
import { TBioViewComponent } from './dashboard_components/super_admin_components/main_content/teachers/t-bio-view/t-bio-view.component';
import { TClassesViewComponent } from './dashboard_components/super_admin_components/main_content/teachers/t-classes-view/t-classes-view.component';
import { EditFormComponent } from './dashboard_components/super_admin_components/main_content/students/edit-form/edit-form.component';
import { EditClassComponent } from './dashboard_components/super_admin_components/main_content/students/edit-class/edit-class.component';
import { SupTopBarComponent } from './dashboard_components/super_admin_components/top_bar/sup-top-bar/sup-top-bar.component';
import { MarksTableComponent } from './dashboard_components/super_admin_components/main_content/students/marks-table/marks-table.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponentComponent,
    TopbarComponent,
    SidebarComponent,
    StdBioTblComponent,
    SuperFirstPageComponent,
    StudentSideBarComponent,
    BioViewComponent,
    SAdminDashboardComponent,
    TopbarComponent,
    ClassViewComponent,
    MarksViewComponent,
    AttendenceViewComponent,
    TAttendenceViewComponent,
    TBioViewComponent,
    TClassesViewComponent,
    EditFormComponent,
    EditClassComponent,
    SupTopBarComponent,
    MarksTableComponent,
    
    

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { 
  public spring_link = "http://localhost:8080/"
}
