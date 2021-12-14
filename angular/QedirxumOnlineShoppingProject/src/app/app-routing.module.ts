import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent}  from './admin-panel/admin-panel.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent },

  { path: 'home', component: HomePageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
