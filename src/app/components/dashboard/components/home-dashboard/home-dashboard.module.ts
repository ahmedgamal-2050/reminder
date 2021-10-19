import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const homeRoutes: Routes = [
  {
    path: 'home-dashboard',
    component: HomeDashboardComponent,
  },
];

@NgModule({
  declarations: [
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule,
  ]
})
export class HomeDashboardModule { }
