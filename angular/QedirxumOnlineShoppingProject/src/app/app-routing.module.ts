import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent}  from './admin-panel/admin-panel.component';
import { ManagerTableComponent}  from './manager-table/manager-table.component';
import { ManagerCreateComponent}  from './manager-create/manager-create.component';

import { ManagerComponent}  from './manager/manager.component';
import { FoodCreateComponent}  from './food-create/food-create.component';
import { FoodTableComponent}  from './food-table/food-table.component';
import { InqridientTableComponent}  from './inqridient-table/inqridient-table.component';
import {InqridientCreateComponent }  from './inqridient-create/inqridient-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent },

  { path: 'home', component: HomePageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin/manager-t', component: ManagerTableComponent },
  { path: 'manager-c', component: ManagerCreateComponent },

  { path: 'manager-page', component: ManagerComponent },
  { path: 'manager-page/food-create', component: FoodCreateComponent },
  { path: 'manager-page/food-table', component: FoodTableComponent },
  { path: 'manager-page/inqridient-table', component: InqridientTableComponent },
  { path: 'manager-page/inqridient-create', component: InqridientCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
