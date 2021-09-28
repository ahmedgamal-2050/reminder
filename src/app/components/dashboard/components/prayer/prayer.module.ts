import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrayerComponent } from './prayer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const prayerRoutes: Routes = [
  {
    path: 'prayer',
    component: PrayerComponent,
    pathMatch: 'prefix'
  },
];

@NgModule({
  declarations: [
    PrayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prayerRoutes),
    FormsModule
  ]
})
export class PrayerModule { }
