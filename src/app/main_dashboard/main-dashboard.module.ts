import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './admin_finished/main-component/main-component.component';
import { StdBioTblComponent } from '../dashboard_components/admin_dashboard_components/main_contents/std-bio-tbl/std-bio-tbl.component';
import { BioViewComponent } from '../dashboard_components/super_admin_components/main_content/students/bio-view/bio-view.component';
import { SAdminDashboardComponent } from './super_admin_finished/s-admin-dashboard/s-admin-dashboard.component';
import { StudentSideBarComponent } from '../dashboard_components/super_admin_components/side_bar/student-side-bar/student-side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from '../dashboard_components/admin_dashboard_components/topbar/topbar.component';
import { EditFormComponent } from '../dashboard_components/super_admin_components/main_content/students/edit-form/edit-form.component';
import { ClassViewComponent } from '../dashboard_components/super_admin_components/main_content/students/class-view/class-view.component';
import { EditClassComponent } from '../dashboard_components/super_admin_components/main_content/students/edit-class/edit-class.component';
import { MarksViewComponent } from '../dashboard_components/super_admin_components/main_content/students/marks-view/marks-view.component';
import { MarksTableComponent } from '../dashboard_components/super_admin_components/main_content/students/marks-table/marks-table.component';

const routes:Routes=[
  {path:"admin",component:MainComponentComponent,children:[{path:"",component:StdBioTblComponent}]},
  {path:"super_admin",component:SAdminDashboardComponent,children:[
    {path:"student",component:StudentSideBarComponent},
    { path: 'edit', component: EditFormComponent, outlet: 'mainbar' },
    { path: '', component: BioViewComponent, outlet: 'mainbar' },
    {path:'class',component:ClassViewComponent,outlet:'mainbar'},
    {path:'editclass',component:EditClassComponent,outlet:'mainbar'},
    {path:"marks",component:MarksViewComponent,outlet:'mainbar'},
    {path:"marks_table",component:MarksTableComponent,outlet:'mainbar'}
    
  ]},
 


]


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  exports: [RouterModule]
})
export class MainDashboardModule { }
