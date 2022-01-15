
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HttpInterSectorService } from './service/http-inter-sector.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManagerCreateComponent } from './manager-create/manager-create.component';
import { ManagerTableComponent } from './manager-table/manager-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodTableComponent } from './food-table/food-table.component';
import { InqridientTableComponent } from './inqridient-table/inqridient-table.component';
import { InqridientCreateComponent } from './inqridient-create/inqridient-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
// For MDB Angular Free
import { PopoverModule, WavesModule,CarouselModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalInfoMenuComponent } from './modal-info-menu/modal-info-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomePageComponent,
    LogoutComponent,
    SignInComponent,
    AdminPanelComponent,
    ManagerCreateComponent,
    ManagerTableComponent,
    FoodCreateComponent,
    FoodTableComponent,
    InqridientTableComponent,
    InqridientCreateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    FooterComponent,
    ModalInfoMenuComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ,FormsModule, BrowserAnimationsModule,ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'primary',cancelButtonType:'danger',confirmText:'Tesdiq',cancelText:'Legv Et'
          }),
    DemoMaterialModule,
    PopoverModule.forRoot(),
    WavesModule.forRoot(),
    CarouselModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [{

    provide:HTTP_INTERCEPTORS,useClass:HttpInterSectorService,multi:true
    
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
