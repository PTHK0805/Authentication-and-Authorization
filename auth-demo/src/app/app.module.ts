import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AdminComponent } from './admin/admin.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { SignupComponent } from './signup/signup.component';


//export function getAuthHttp(http) {
//  return new AuthHttp(new AuthConfig({
//    tokenName: 'token'
//  }), http);
//}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OrderService,

    AuthService,
    AuthGuard,
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
