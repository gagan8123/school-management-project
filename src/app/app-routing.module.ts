import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main_dashboard/admin_finished/main-component/main-component.component';
import { StdBioTblComponent } from './dashboard_components/admin_dashboard_components/main_contents/std-bio-tbl/std-bio-tbl.component';
import { MainDashboardModule } from './main_dashboard/main-dashboard.module';
import { SuperFirstPageComponent } from './super-first-page/super-first-page.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path: 'dashboard',loadChildren:()=>import("./main_dashboard/main-dashboard.module").then(m=>m.MainDashboardModule)},
  {path:'super_admin',component:SuperFirstPageComponent},
  {path:'',redirectTo:"/login",pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
