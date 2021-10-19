import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditReminderComponent } from '../shared/edit-reminder/edit-reminder.component';
import { SearchComponent } from './search/search.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PrayerListComponent } from './prayer-list/prayer-list.component';

@NgModule({
  declarations: [
    EditReminderComponent,
    SearchComponent,
    TaskListComponent,
    PrayerListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditReminderComponent,
    SearchComponent,
    TaskListComponent,
    PrayerListComponent,
  ]
})
export class SharedModule { }
