import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/public/login/login.module';
import { RegisterModule } from './components/public/register/register.module';
import { DashboardModule } from './components/dashboard/containers/dashboard.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    LoginModule,
    RouterModule,
    DashboardModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
