import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    FormsModule
  ]
})
export class ProfileModule { }
