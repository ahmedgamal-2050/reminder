import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../tasks';
declare let $: any;

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public taskList: Task[] = [];
  public deletedTaskList: Task[] = [];
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';
  public selectedTask!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.deletedTaskList = this.taskList.filter((task: Task) => {
      return (task.deleted === true);
    })
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.deletedTaskList.length; i++) {
      if (this.deletedTaskList[i].id === task.id) {
        this.deletedTaskList.splice(i, 1);
      }
    }
  }

  filter(filteredTaskList: Task[]) {
    if (filteredTaskList) {
      this.filteredTaskList = filteredTaskList;
    }
  }

  search(searching: string) {
    this.searchValue = searching;
  }

  openReminderModal(task: Task) {
    this.selectedTask = task
    $("#reminderModal").modal('show');
  }

  editReminder(task: Task) {
    this.taskService.editReminder(task, this.taskList);
    for (let i = 0; i < this.deletedTaskList.length; i++) {
      if (this.deletedTaskList[i].id === task.id) {
        this.deletedTaskList[i].reminder = task.reminder;
      }
    }
    $("#reminderModal").modal('hide');
  }
}

