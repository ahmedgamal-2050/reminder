import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditReminderComponent } from '../shared/edit-reminder/edit-reminder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditReminderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditReminderComponent
  ]
})
export class SharedModule { }
