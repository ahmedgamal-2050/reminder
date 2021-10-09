import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditReminderComponent } from '../shared/edit-reminder/edit-reminder.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    EditReminderComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditReminderComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
