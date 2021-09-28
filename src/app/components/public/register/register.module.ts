import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    pathMatch: 'prefix'
  },
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RegisterModule { }
