import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemindersComponent } from './reminders.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const remindersRoutes: Routes = [
  {
    path: 'reminders',
    component: RemindersComponent,
  },
];

@NgModule({
  declarations: [
    RemindersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remindersRoutes),
    FormsModule,
  ]
})
export class RemindersModule { }
