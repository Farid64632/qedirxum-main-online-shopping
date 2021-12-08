
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HttpInterSectorService } from './service/http-inter-sector-service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent
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
