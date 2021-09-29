import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../components/tasks';

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.scss']
})
export class EditReminderComponent implements OnInit, OnChanges {
  @Input() selectedTask!: Task;
  @Output() edit = new EventEmitter<Task>();
  public taskReminder!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTask.currentValue) {
      this.selectedTask = changes.selectedTask.currentValue as Task;
      if (this.selectedTask) {
        this.taskReminder = this.selectedTask.reminder as Date;
      }
    }
  }

  editReminder(taskReminder: Date) {
    this.selectedTask.reminder = taskReminder;
    this.edit.emit(this.selectedTask);
  }
}
