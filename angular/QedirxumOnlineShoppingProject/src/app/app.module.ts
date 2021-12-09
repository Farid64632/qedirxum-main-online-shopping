
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HttpInterSectorService } from './service/http-inter-sector.service';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomePageComponent,
    LogoutComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ,FormsModule
  ],
  providers: [{

    provide:HTTP_INTERCEPTORS,useClass:HttpInterSectorService,multi:true
    
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
