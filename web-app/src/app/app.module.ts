import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponentComponent } from './home/registration-component/registration-component.component';
import { LoginComponentComponent } from './home/login-component/login.component';
import { MaterialModule } from './material/material.module';
import { FarmersListComponent } from './farmers/list-farmers/farmer-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { GuardsGuard } from './myServices/guards.guard';

import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { FrontComponent } from './home/navigator.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationService } from './myServices/authorization.service';
import { IntAuthInterceptor } from './myServices/int-auth.interceptor';


@NgModule({
  declarations: [
    HomeComponent,
    FrontComponent,
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    FarmersListComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
   HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HomeModule,

  ],
  exports:[FrontComponent],
  providers: [
    AuthorizationService, GuardsGuard,
    { provide: HTTP_INTERCEPTORS, useClass: IntAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
