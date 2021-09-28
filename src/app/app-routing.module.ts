import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { DashboardComponent } from './components/dashboard/containers/dashboard.component';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./components/public/register/register.module').then(m => m.RegisterModule),
    pathMatch: 'prefix',
  },
  {
    path: 'login',
    loadChildren: () => import('./components/public/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/containers/dashboard.module').then(m => m.DashboardModule),
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
