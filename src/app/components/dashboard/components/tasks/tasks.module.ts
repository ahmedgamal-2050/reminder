import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const tasksRoutes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent
  },
];

@NgModule({
  declarations: [
    TasksComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksRoutes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TasksModule { }
