import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../components/prayer/prayer.module').then(m => m.PrayerModule),
    pathMatch: 'prefix'
  },
  {
    path: '',
    loadChildren: () => import('../components/home-dashboard/home-dashboard.module').then(m => m.HomeDashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
})
export class DashboardRoutingModule { }
