import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ]
})
export class HomeDashboardModule { }
