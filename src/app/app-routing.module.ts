import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadDetailComponent } from './leads/lead-detail/lead-detail.component';
import { DialogAddQualicallComponent } from './leads/dialog-add-qualicall/dialog-add-qualicall.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  { path: 'leads', component: LeadsComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'lead/:id', component: LeadDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
