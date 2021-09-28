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
    loadChildren: () => import('../components/reminders/reminders.module').then(m => m.RemindersModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/my-pocket/my-pocket.module').then(m => m.MyPocketModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/archive/archive.module').then(m => m.ArchiveModule)
  },
  {
    path: '',
    loadChildren: () => import('../components/trash/trash.module').then(m => m.TrashModule)
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
