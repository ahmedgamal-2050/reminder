import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SharedModule } from '../../shared/shared.module';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

const tasksRoutes: Routes = [
  {
    path: 'tasks',
    component: AllTasksComponent
  },
  {
    path: '',
    loadChildren: () => import('../tasks/reminders/reminders.module').then(m => m.RemindersModule)
  },
  {
    path: '',
    loadChildren: () => import('../tasks/my-pocket/my-pocket.module').then(m => m.MyPocketModule)
  },
  {
    path: '',
    loadChildren: () => import('../tasks/archive/archive.module').then(m => m.ArchiveModule)
  },
  {
    path: '',
    loadChildren: () => import('../tasks/trash/trash.module').then(m => m.TrashModule)
  },
];

@NgModule({
  declarations: [
    AllTasksComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksRoutes),
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class TasksModule { }
