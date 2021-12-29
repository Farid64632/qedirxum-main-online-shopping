import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent}  from './admin-panel/admin-panel.component';
import { ManagerTableComponent}  from './manager-table/manager-table.component';
import { ManagerCreateComponent}  from './manager-create/manager-create.component';

import { FoodCreateComponent}  from './food-create/food-create.component';
import { FoodTableComponent}  from './food-table/food-table.component';
import { InqridientTableComponent}  from './inqridient-table/inqridient-table.component';
import {InqridientCreateComponent }  from './inqridient-create/inqridient-create.component';
import {CategoryListComponent }  from './category-list/category-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminPanelComponent },

  { path: 'home', component: HomePageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'manager-t', component: ManagerTableComponent },
  { path: 'manager-c', component: ManagerCreateComponent },


  { path: 'food-create', component: FoodCreateComponent },
  { path: 'food-table', component: FoodTableComponent},
  { path: 'inqridient-table', component: InqridientTableComponent },
  { path: 'inqridient-create', component: InqridientCreateComponent},
  { path: 'category', component: CategoryListComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
